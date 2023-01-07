import { StatusType } from "./enums";
import { Influencer } from "./influencer";

export interface Offer {
  id: number;
  duration: number;
  money: number;
  status: StatusType;
  influencer: Influencer;
  message: string;
  event: Event;
}
