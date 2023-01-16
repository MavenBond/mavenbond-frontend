import { PlatformType, StatusType, DeliveryType } from "./enums";
import { Offer } from "./offer";

export interface Event {
  id: number;
  title: string;
  subject: string;
  type: DeliveryType;
  platform: PlatformType;
  description: string;
  moneyMin: number;
  moneyMax: number;
  status: StatusType;
  businessId: string;
  businessEmail: string;
  businessName: string;
  startDate: number;
  endDate: number;
  offers: Offer[];
}
