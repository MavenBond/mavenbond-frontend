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
  autoClose: 1500,
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
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    required: false,
    placeholder: "Optional and will not be validated",
    registerAs: "country",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    required: false,
    placeholder: "Optional and will not be validated",
    registerAs: "city",
  },
  {
    id: "new_password",
    label: "New Password",
    type: "password",
    required: false,
    placeholder: "Leave blank to remain old password",
    registerAs: "new_password",
  },
];

export const BUSINESS_FORM_MODEL = [
  {
    id: "companyName",
    label: "Company Name",
    type: "text",
    required: true,
    placeholder: "Your company name",
    registerAs: "company_name",
  },
  {
    id: "companyEmail",
    label: "Company Email",
    type: "text",
    required: false,
    placeholder: "Your company email",
    registerAs: "company_email",
  },
  {
    id: "websiteUrl",
    label: "Website",
    type: "text",
    required: false,
    placeholder: "Your representative website",
    registerAs: "website_url",
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
  },
  {
    id: "youtubeUrl",
    label: "YouTube",
    type: "text",
    required: false,
    placeholder: "Your YouTube URL",
    registerAs: "website_url",
  },
  {
    id: "facebookUrl",
    label: "Facebook",
    type: "text",
    required: false,
    placeholder: "Your Facebook URL",
    registerAs: "facebook_url",
  },
  {
    id: "instagramUrl",
    label: "Instagram",
    type: "text",
    required: false,
    placeholder: "Your Instagram URL",
    registerAs: "instagram_url",
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
