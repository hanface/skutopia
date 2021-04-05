export const getUserFriendlyDate = (utc: string) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(utc);
  const year = d.getFullYear();
  const date = d.getDate();
  const month = d.getMonth();
  const monthName = monthNames[month];

  return `${date} ${monthName}, ${year}`;
};
