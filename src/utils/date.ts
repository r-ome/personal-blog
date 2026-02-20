export function formatDate(
  date: Date,
  locale = "en-PH",
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  },
) {
  return Intl.DateTimeFormat(locale, options).format(date);
}
