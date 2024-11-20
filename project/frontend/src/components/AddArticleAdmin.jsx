import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(5, "اسم دوره باید حداقل ۵ کاراکتر باشد")
    .max(20, "اسم دوره نباید بیشتر از ۲۰ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  shortName: Yup.string()
    .min(6, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(12, "نام کوتاه نباید بیشتر از ۱۲ کاراکتر باشد")
    .matches(/-v2$/, "نام کوتاه باید با -v2 پایان یابد")
    .required("لطفا همه موارد را پر کنید"),
  description: Yup.string()
    .min(20, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(90, "نام کوتاه نباید بیشتر از ۱۲ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  body: Yup.string()
    .min(20, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(140, "نام کوتاه نباید بیشتر از ۱۲ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  file: Yup.mixed()
    .required("لطفا یک فایل انتخاب کنید")
    .test("fileSize", "حجم فایل نباید بیش از 2MB باشد", (value) =>
      value && value[0] ? value[0].size <= 2000000 : true
    )
    .test("fileType", "فرمت فایل باید تصویر باشد", (value) =>
      value && value[0]
        ? ["image/jpeg", "image/png", "image/gif"].includes(value[0].type)
        : true
    ),
  categoryID: Yup.string().required("لطفا دسته‌بندی را انتخاب کنید"), // اعتبارسنجی required برای دسته‌بندی
});

export default function AddArticleAdmin({onArticleAdded}) {
  const [categoryData, setCategoryData] = useState([]);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const getAllCategorys = async () => {
    const response = await fetch("http://localhost:4000/v1/category", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();

    const formatData = result.map((category) => ({
      id: category._id,
      name: category.name,
      title: category.title,
    }));
    setCategoryData(formatData);
  };
  const getInputClass = (name) => {
    return `flex items-center gap-2 w-full p-2 border rounded-md shadow-md shadow-greydark ${
      errors[name]
        ? "border-error "
        : touchedFields[name]
        ? "border-success "
        : "border-black"
    }`;
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    // console.log('data',data)
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("categoryID", data.categoryID);
    formData.append("description", data.description);
    formData.append("shortName", data.shortName);
    formData.append("body", data.body);
    formData.append("cover", data.file[0]);

    try {
      const response = await fetch("http://localhost:4000/v1/articles", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorageData.token}`, // Authorization header
        },
        body: formData, // Use FormData directly as the body
      });

      if (response.ok) {
        onArticleAdded();
        reset();
        await swal("ثبت دوره با موفقیت انجام شد", {
          icon: "success",
        });
      } else {
        const errorData = await response.json();
        console.log("errorData", errorData);
        await swal(`خطا: ${errorData.message}`, {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("خطا در اتصال به سرور", error);
      await swal("خطا در اتصال به سرور", {
        icon: "error",
      });
    }
  };

  useEffect(() => {
    getAllCategorys();
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2 rounded-sm shadow-xl m-4 font-iransans max-w-[100%] md:max-w-[70%] border border-grey">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4   p-4 bg-white rounded-md shadow-md  w-full"
      >
        {/* Name Field */}
        <div className="flex flex-col md:flex-row gap-2 w-full ">
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-semibold"> عنوان</label>
            <input
              type="text"
              placeholder=" عنوان مقاله "
              {...register("title")}
              className={getInputClass("title")}
            />
            {errors.title && (
              <p className="text-error">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-semibold">نام کوتاه:</label>
            <input
              type="text"
              placeholder="url دوره "
              {...register("shortName")}
              className={getInputClass("shortName")}
            />
            {errors.shortName && (
              <p className="text-error">{errors.shortName.message}</p>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 w-full ">
          <div className="flex flex-col items-start gap-2 w-[50%]">
            <label className="font-semibold">فایل:</label>
            <input
              type="file"
              {...register("file")}
              className={getInputClass("file")}
              accept=".png,.svg"
            />
            {errors.file && <p className="text-error">{errors.file.message}</p>}
          </div>
          <div className="flex flex-col items-start gap-2 w-[50%]">
            <label className="font-semibold">دسته‌بندی:</label>
            <select
              {...register("categoryID")}
              className={getInputClass("categoryID")}
              defaultValue=""
            >
              <option value="" disabled>
                انتخاب دسته‌بندی
              </option>
              {categoryData.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
            {errors.categoryID && (
              <p className="text-error">{errors.categoryID.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <label className="font-semibold">توضیحات:</label>
          <textarea
            placeholder="توضیحات"
            {...register("description")}
            className={getInputClass("description")}
          />
          {errors.description && (
            <p className="text-error">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start gap-2">
          <label className="font-semibold">توضیحات:</label>
          <textarea
            placeholder="متن مقاله"
            {...register("body")}
            className={getInputClass("body")}
          />
          {errors.body && <p className="text-error">{errors.body.message}</p>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full p-2 rounded-md shadow-md ${
            isValid ? "bg-success text-myWhite" : "bg-greydarko text-myWhite"
          }`}
        >
          ارسال
        </button>
      </form>
    </div>
  );
}
