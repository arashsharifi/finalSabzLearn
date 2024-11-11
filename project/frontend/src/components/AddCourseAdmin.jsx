import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nameCourse: Yup.string()
    .min(5, "اسم دوره باید حداقل ۵ کاراکتر باشد")
    .max(20, "اسم دوره نباید بیشتر از ۲۰ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  description: Yup.string()
    .max(90, "توضیحات نباید بیشتر از ۹۰ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  shortName: Yup.string()
    .min(6, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(12, "نام کوتاه نباید بیشتر از ۱۲ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  price: Yup.number()
    .typeError("قیمت باید عدد باشد")
    .positive("قیمت باید بیشتر از صفر باشد")
    .required("لطفا قیمت را وارد کنید"),
  support: Yup.string().required("لطفا گروه پشتیبانی را وارد کنید"),
  status: Yup.string()
    .oneOf(["start", "presell"], "لطفا یکی از وضعیت‌ها را انتخاب کنید")
    .required("لطفا وضعیت دوره را مشخص کنید"),
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
const AddCourseAdmin = ({ onCourseAdded }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [base64, setBase64] = useState("");
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const getAllCategorys = async () => {
    // console.log("localStorageData", localStorageData);

    const response = await fetch("http://localhost:4000/v1/category", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    // console.log("resultCategory", result);
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
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const convertToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
      });
    };

    const base64Cover = await convertToBase64(data.file[0]);
    console.log("cover", data.file[0]);
    const newCourse = {
      name: data.nameCourse,
      categoryID: data.categoryID,
      description: data.description,
      cover: {
        data: base64Cover, 
        mimetype: data.file[0].type, 
        size: data.file[0].size, 
      },
      shortName: data.shortName,
      support: data.support,
      price: data.price,
      status: data.status,
    };

    try {
      const response = await fetch("http://localhost:4000/v1/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(newCourse),
      });

      if (response.ok) {
        onCourseAdded();
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
            <label className="font-semibold">اسم دوره:</label>
            <input
              type="text"
              placeholder="اسم دوره"
              {...register("nameCourse")}
              className={getInputClass("nameCourse")}
            />
            {errors.name && <p className="text-error">{errors.name.message}</p>}
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
        <div className="flex flex-col w-full md:flex-row gap-2">
          <div className="flex flex-col items-start gap-2 w-full">
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
          <div className="flex flex-col items-start gap-2 w-full">
            <label className="font-semibold">قیمت:</label>
            <input
              type="number"
              placeholder="قیمت"
              {...register("price")}
              className={getInputClass("price")}
            />
            {errors.price && (
              <p className="text-error">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <label className="font-semibold">نحوه پشتیبانی دوره:</label>
          <input
            type="text"
            placeholder="پشتیبانی"
            {...register("support")}
            defaultValue="گروه تلگرامی"
            className={getInputClass("support")}
          />
          {errors.support && (
            <p className="text-error">{errors.support.message}</p>
          )}
        </div>

        <div className="flex flex-col items-start gap-2">
          <label className="font-semibold">فایل:</label>
          <input
            type="file"
            {...register("file")}
            className={getInputClass("file")}
            accept=".png,.svg"
          />
          {errors.file && <p className="text-error">{errors.file.message}</p>}
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
          <label className="font-semibold">وضعیت دوره:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" value="start" {...register("status")} />
              در حال برگزاری
            </label>
            <label>
              <input type="radio" value="presell" {...register("status")} />
              پیش‌فروش
            </label>
          </div>
          {errors.status && (
            <p className="text-error">{errors.status.message}</p>
          )}
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
};

export default AddCourseAdmin;
