import { format, parseISO, isValid as isValidDate } from "date-fns";

export function formatISO({
  date,
  format: strFormat = "dd/MM/yyyy",
}: {
  date: string;
  format?: string;
}) {
  const parsedDate = parseISO(date);
  const formatedDate = isValidDate(parsedDate)
    ? format(parsedDate, strFormat)
    : "";

  return formatedDate;
}
