import * as z from "zod";

/**
 * LoginSchema for login form
 */
export const LoginSchema = z.object({
  user: z.string().nonempty({ "error": "Enter your username" }),
  password: z.string().nonempty({ error: "Enter your password" }),
});



export const ProductFormSchema = z.object({
  title: z.string().nonempty({ error: "Enter product name" }),
  // metaTitle: z.string().nonempty({ error: "" }),
  summary: z.string().nonempty({ error: "توضیح مختصر را وارد کنید" }),
  description: z.string().nonempty({ error: "توضیحات را وارد کنید" }),
  slug: z.string().nonempty({ error: "پیوند یکتا را وارد کنید" }),
  metaDescription: z.string().nonempty({ error: "توضیحات متا را وارد کنید" }),
  category: z.string().nonempty({ error: "دسته بندی را وارد کنید" }),
  mainImage: z.string({ error: "تصویر اصلی را وارد کنید" }),
  name: z.string().nonempty({ error: "نام مدرس را وارد کنید" }),
  major: z.string().nonempty({ error: "رشته تحصیلی مدرس را وارد کنید" }),
  hours: z.string().nonempty({ error: "تعداد ساعت دوره را وارد کنید" }),
  price: z.string().nonempty({ error: "قیمت را وارد کنید" }),
  startAt: z.string(),
  keywords: z.array(z.string()),
  hour: z.string(),
  capacity: z.string(),
  isPopular: z.boolean()
})

export const UserFormSchema = z.object({
  fName: z.string().nonempty("نام اجباری است."),
  lName: z.string().nonempty("نام خانوادگی اجباری است."),
  email: z.email("ایمیل وارد شده معتبر نیست").nonempty("ایمیل اجباری است").or(z.literal("")),
  tel: z.string().nonempty("شماره تلفن اجباری است").regex(/^09\d{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
  username: z.string().nonempty("نام کاربری الزامی است"),
  userRole: z.enum(["owner", "normal"], {
    error: "نوع کاربر اجباری است"
  }),
  password: z.string().nonempty("رمز عبور اجباری است")
})

