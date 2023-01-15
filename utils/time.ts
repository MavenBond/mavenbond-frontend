import moment from "moment";

export function formatUnixTimeStamp(unixTimestamp: number) {
  return moment.unix(unixTimestamp).format("D MMMM, YYYY");
}
export const formatted = (datetimeunix: number) =>
  moment(datetimeunix).format("YYYY/MM/DD hh:mm:ss A");
