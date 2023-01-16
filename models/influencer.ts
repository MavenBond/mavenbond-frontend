import { Customer } from "./customer";

export interface Influencer extends Customer {
  tiktok_url: string;
  youtube_url: string;
  facebook_url: string;
  instagram_url: string;
}
