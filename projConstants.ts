import z from "zod";
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
      .regex(/[a-z]/gi, { message: "Invalid full name" })
      .min(3, { message: "Fullname: at least 3 characters" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password: at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .required()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["matchingPasswords"], // path of error
  });

import type { ToastOptions } from "react-toastify";
export const TOAST_CONFIG: ToastOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

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
