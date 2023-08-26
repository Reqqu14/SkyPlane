export function formatDate(date) {
  const dateObject = new Date(date);
  const day = String(dateObject.getDate()).padStart(2, "0");
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
}

export function getFormatedActualDate() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[today.getMonth()];

  const year = today.getFullYear();

  return `${day} ${month} ${year}`;
}
