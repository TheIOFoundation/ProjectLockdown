export function withoutTime(dateTime) {
  const date = new Date(dateTime.getTime());
  date.setHours(0, 0, 0, 0);
  return date;
}
