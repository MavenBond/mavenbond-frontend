import { TOAST_CONFIG } from "consts";
import { toast } from "react-toastify";

export const tasty = (msg: string) => toast.info(msg, TOAST_CONFIG);
export const happy = (msg: string) => toast.success(msg, TOAST_CONFIG);
export const moody = (msg: string) => toast.warn(msg, TOAST_CONFIG);
export const angry = (msg: string) => toast.error(msg, TOAST_CONFIG);
