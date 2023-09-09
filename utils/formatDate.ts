export const formatDate = (
  strDate?: string,
  locale: string = "en-US"
): string => {
  const date = strDate ? new Date(strDate) : new Date();
  const format = date.toLocaleString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return format.replace(/[, ]+/g, " ").trim();
};
