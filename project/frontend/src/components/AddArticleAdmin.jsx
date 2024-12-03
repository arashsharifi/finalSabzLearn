import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Controller } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";
import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";
import "ckeditor5-premium-features/ckeditor5-premium-features.css";

import Modal from "./UI/Modal";

const schema = Yup.object().shape({
  title: Yup.string()
    .min(5, "اسم دوره باید حداقل ۵ کاراکتر باشد")
    .max(40, "اسم دوره نباید بیشتر از 40 کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  shortName: Yup.string()
    .min(6, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(20, "نام کوتاه نباید بیشتر از 20 کاراکتر باشد")
    .matches(/-v2$/, "نام کوتاه باید با -v2 پایان یابد")
    .required("لطفا همه موارد را پر کنید"),
  description: Yup.string()
    .min(20, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(90, "نام کوتاه نباید بیشتر از ۱۲ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
  body: Yup.string()
    .min(5, "نام کوتاه باید حداقل ۶ کاراکتر باشد")
    .max(140, "نام کوتاه نباید بیشتر از 140 کاراکتر باشد")
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

export default function AddArticleAdmin({ onArticleAdded }) {
  const [categoryData, setCategoryData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const editorRef = useRef();
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
    setValue,
    control,
    value,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const errorsArray = Object.entries(errors).map(([field, error]) => ({
      field,
      message: error.message,
    }));

    if (errorsArray.length > 0) {
      const errorMessages = errorsArray
        .map((err) => `فیلد "${err.field}" : ${err.message}`)
        .join("\n");

      await swal({
        title: "خطاهای اعتبارسنجی",
        text: errorMessages,
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("categoryID", data.categoryID);
    formData.append("description", data.description);
    formData.append("shortName", data.shortName);
    formData.append("body", data.body);
    formData.append("cover", data.file[0]);
    // console.log("formData", JSON.stringify(formData));
    // console.log("formData",formData);
    // for (let [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);

    //   if (value instanceof File) {
    //     console.log(
    //       `File: ${value.name}, Size: ${value.size}, Type: ${value.type}`
    //     );
    //   }
    // }
    // return "";
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
        <button
          className={`w-[30%] p-2 rounded-md shadow-md ${"bg-customfive text-myWhite"}`}
          onClick={() => setIsModalOpen(true)}
        >
          تکس ادیتور
        </button>
        {/* <div className="flex flex-col items-start gap-2">
          <label className="font-semibold">توضیحات:</label>
          <textarea
            placeholder="متن مقاله"
            {...register("body")}
            className={getInputClass("body")}
          />
          {errors.body && <p className="text-error">{errors.body.message}</p>}
        </div> */}

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
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        large={true}
      >
        <div className="flex flex-col gap-3 p-4"></div>
        {/* <CKEditor
          editor={ClassicEditor}
          config={{
            plugins: [Essentials, Bold, Italic, Paragraph],
            toolbar: ["undo", "redo", "|", "bold", "italic"],
          }}
          data={watch("body")}
          // contextItemMetadata={{
          //   name: "editor1",
          //   yourAdditionalData: 2,
          // }}
          // onReady={(editor) => {
          //   console.log("Editor 1 is ready to use!", editor);
          // }}
          // onChange={() => {
          //   onChange(editorRef.current?.getData());
          // }}
          onChange={(event, editor) => {
            const data = editor.getData();
            // console.log(data);
            setValue("body", data);
          }}
        /> */}
        <Controller
          name="body"
          control={control} // اضافه کردن این خط برای اتصال فرم به react-hook-form
          defaultValue=""
          rules={{
            required: "متن مقاله الزامی است",
            minLength: {
              value: 5,
              message: "حداقل طول متن باید ۵ کاراکتر باشد",
            },
            maxLength: {
              value: 140,
              message: "حداکثر طول متن باید 140 کاراکتر باشد",
            },
          }}
          render={({ field }) => (
            <CKEditor
              editor={ClassicEditor}
              config={{
                plugins: [Essentials, Bold, Italic, Paragraph],
                toolbar: ["undo", "redo", "|", "bold", "italic"],
              }}
              data={field.value}
              onChange={(event, editor) => {
                field.onChange(editor.getData());
              }}
            />
          )}
        />
        {errors.body && <p className="text-error">{errors.body.message}</p>}
      </Modal>
    </div>
  );
}
