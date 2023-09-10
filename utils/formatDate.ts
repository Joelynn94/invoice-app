export const formatDate = (
  dateOrStrDate?: string | Date,
  locale: string = "en-US"
): string => {
  let date;

  if (typeof dateOrStrDate === "string") {
    date = new Date(dateOrStrDate);
  } else if (dateOrStrDate instanceof Date) {
    date = dateOrStrDate;
  } else {
    date = new Date(); // Default to the current date if no valid date is provided
  }

  const format = date.toLocaleString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return format.replace(/[, ]+/g, " ").trim();
};
