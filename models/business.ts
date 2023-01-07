import { Customer } from "./customer";

export interface Business extends Customer {
  companyName: string;
  companyEmail: string;
  websiteURL: string;
}
