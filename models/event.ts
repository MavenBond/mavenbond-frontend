import { Business } from "./business";
import { PlatformType, StatusType, VideoType } from "./enums";
import { Offer } from "./offer";

export interface Event {
  id: number;
  title: string;
  subject: string;
  type: VideoType;
  platform: PlatformType;
  moneyMin: number;
  moneyMax: number;
  status: StatusType;
  business: Business;
  startDate: number;
  endDate: number;
  offers: Offer;
}
