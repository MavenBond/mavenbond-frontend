import moment from "moment";

export function formatUnixTimeStamp(unixTimestamp: number) {
  return moment.unix(unixTimestamp).format("D MMMM, YYYY");
}
