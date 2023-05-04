import { format, parseISO } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString); //parses string to Date object, if dateString is a valid ISO-8601 string.
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
  date;
}
