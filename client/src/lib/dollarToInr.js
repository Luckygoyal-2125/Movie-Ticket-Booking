const dollarToInr = (amount) => {
  const exchangeRate = 83.5;
  const inrAmount = amount * exchangeRate;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(inrAmount);
};

export default dollarToInr;
