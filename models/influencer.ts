import { Customer } from "./customer";

export interface Influencer extends Customer {
  tiktokURL: string;
  youtubeURL: string;
  facebookURL: string;
  instagramURL: string;
}
