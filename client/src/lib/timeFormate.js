const timeFormate = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;
  return `${hours}h ${minutesLeft}m`;
};
export default timeFormate;
