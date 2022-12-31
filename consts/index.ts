import type { ToastOptions } from "react-toastify";

// CAN BE USED TO READ ONLY
export const ColorScheme = {
  purple: {
    hex: "#7c3aed",
    rgb: "rgb(124,58,237)",
    accent: "rgba(124,58,237, 0.8)",
    tw: "violet-600",
  },
  amber: {
    hex: "#fbbf24",
    rgb: "rgb(251, 191, 56)",
    accent: "rgb(251, 191, 56, 0.8)",
    tw: "amber-400",
  },
  blue: {
    dark: {
      hex: "#0d1626",
      rgb: "rgb(13,22,38)",
    },
  },
  pink: {
    light: { hex: "#ee3c77", rgb: "rgb(238,60,119)" },
    dark: {
      hex: "#ec2c6c",
      rgb: "rgb(236,44,108)",
    },
  },
};

export const LOGIN_FORM_MODEL = [
  {
    id: "email",
    label: "Email",
    type: "text",
    placeholders: ["Your email", "Use a lovely email"],
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholders: ["Your password", "Use a strong password"],
  },
  {
    id: "confirmPassword",
    label: "Confirm Password",
    type: "password",
    placeholders: ["Confirm your password"],
  },
];

export const TOAST_CONFIG: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
};
