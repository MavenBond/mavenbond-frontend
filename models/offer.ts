import { StatusType } from "./enums";

export interface Offer {
  id: number;
  money: number;
  duration: number;
  status: StatusType;
  influencerId: string;
  businessId: string;
  businessEmail: string;
  businessName: string;
  message: string;
}
