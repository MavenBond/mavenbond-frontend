export const FALLBACK_PROFILE_URL =
  "https://pathwayactivities.co.uk/wp-content/uploads/2016/04/Profile_avatar_placeholder_large-circle-350x350.png";

import z from "zod";
export const NAME_REGEX =
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
export const LOGIN_ZOD_MODEL = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password: at least 8 characters" }),
  })
  .required();

export const SIGNUP_ZOD_MODEL = z
  .object({
    fullName: z
      .string()
      .regex(NAME_REGEX, { message: "Invalid full name" })
      .min(3, { message: "Full name: at least 3 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password: at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["matchingPasswords"], // path of error
  });

export const PROFILE_ZOD_MODEL = z
  .object({
    email: z.string().email(),
    full_name: z
      .string()
      .regex(NAME_REGEX, { message: "Invalid full name" })
      .min(3, { message: "New full name: at least 3 characters" }),
    new_password: z.string().nullable(),
    confirm_password: z.string().optional(),
    phone: z.string().nullable(),
    country: z.string().nullable(),
    city: z.string().nullable(),
  })
  .refine(
    (data) => {
      if (data.new_password) return data.new_password.length >= 8;
      return true;
    },
    {
      message: "New password: at least 8 characters",
      path: ["tooShortPassword"], // path of error
    }
  )
  .refine(
    (data) => {
      if (data.new_password) return data.new_password === data.confirm_password;
      return true;
    },
    {
      message: "Passwords don't match",
      path: ["matchingPasswords"], // path of error
    }
  );

import type { ToastOptions } from "react-toastify";
export const TOAST_CONFIG: ToastOptions = {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

export const CUSTOMER_FORM_MODEL = [
  {
    id: "full_name",
    label: "Full Name",
    type: "text",
    required: false,
    placeholder: "Your new full name",
    registerAs: "full_name",
    tooltip: "",
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    required: false,
    placeholder: "Your new email",
    registerAs: "email",
    tooltip: "A confirm email will be sent to your NEW email if you provide a NEW one",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    required: false,
    placeholder: "Optional and will not be validated",
    registerAs: "phone",
    tooltip: "",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    required: false,
    placeholder: "Optional and will not be validated",
    registerAs: "country",
    tooltip: "",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    required: false,
    placeholder: "Optional and will not be validated",
    registerAs: "city",
    tooltip: "",
  },
  {
    id: "new_password",
    label: "New Password",
    type: "password",
    required: false,
    placeholder: "Leave blank to remain old password",
    registerAs: "new_password",
    tooltip: "",
  },
];

export const BUSINESS_FORM_MODEL = [
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    required: false,
    placeholder: "Your company name",
    registerAs: "company_name",
    tooltip: "",
  },
  {
    id: "companyEmail",
    label: "Company Email",
    type: "text",
    required: false,
    placeholder: "Your company email",
    registerAs: "company_email",
    tooltip: "",
  },
  {
    id: "websiteUrl",
    label: "Company Website",
    type: "text",
    required: false,
    placeholder: "Your representative website",
    registerAs: "website_url",
    tooltip: "",
  },
];

export const INFLUENCER_FORM_MODEL = [
  {
    id: "tiktokUrl",
    label: "Tiktok",
    type: "text",
    required: false,
    placeholder: "Your Tiktok URL",
    registerAs: "tiktok_url",
    tooltip: "",
  },
  {
    id: "youtubeUrl",
    label: "YouTube",
    type: "text",
    required: false,
    placeholder: "Your YouTube URL",
    registerAs: "youtube_url",
    tooltip: "",
  },
  {
    id: "facebookUrl",
    label: "Facebook",
    type: "text",
    required: false,
    placeholder: "Your Facebook URL",
    registerAs: "facebook_url",
    tooltip: "",
  },
  {
    id: "instagramUrl",
    label: "Instagram",
    type: "text",
    required: false,
    placeholder: "Your Instagram URL",
    registerAs: "instagram_url",
    tooltip: "",
  },
];

export const LOGIN_FORM_MODEL = [
  {
    id: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
    placeholders: ["Your full name", "Your lovely full name"],
  },
  {
    id: "email",
    label: "Email",
    type: "text",
    required: true,
    placeholders: ["Your email", "Use a lovely email"],
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    required: true,
    placeholders: ["Your password", "Use a strong password"],
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    required: true,
    placeholders: ["Confirm your password"],
  },
];

export const HOME_ABOUT_CONTENT_1 = `is one of the best
influencer marketing platforms that provides services for advertising campaigns. The
influencer marketing platform helps you to create and run ad campaigns for your business
by hiring top content creators in the market. Receive advertising offers from advertisers
for your ad requests. In addition, this platform allows you to browse and check the
details of content creators. So, you are able to select the most suitable influences to
represent your business.`;

export const HOME_ABOUT_CONTENT_2 = `is an all-in-one
cloud-based platform that completely simplifies the management of ad campaigns, the
creation of ad campaigns, and knowing the status of ongoing campaigns. Saves up to 50-60%
of the time while creating and running an ad campaign for your business with just a few
clicks. So, what are you waiting for ✨`;

export const DUMMY_MEETINGS = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-11T13:00",
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-01-12T14:00",
    endDatetime: "2023-01-12T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2023-01-10T14:00",
    endDatetime: "2023-01-10T14:30",
  },
];
