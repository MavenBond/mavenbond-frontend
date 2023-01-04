import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

export const TOAST_CONFIG: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
};

export const tasty = (msg: string) => toast.info(msg, TOAST_CONFIG);
export const happy = (msg: string) => toast.success(msg, TOAST_CONFIG);
export const moody = (msg: string) => toast.warn(msg, TOAST_CONFIG);
export const angry = (msg: string) => toast.error(msg, TOAST_CONFIG);
