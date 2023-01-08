import { Business } from "./business";
import { PlatformType, StatusType, DeliveryType } from "./enums";
import { Offer } from "./offer";

export interface Event {
  id: number;
  title: string;
  subject: string;
  type: DeliveryType;
  platform: PlatformType;
  moneyMin: number;
  moneyMax: number;
  status: StatusType;
  business: Business;
  startDate: number;
  endDate: number;
  offers: Offer;
}
