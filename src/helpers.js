export const moneyFormat = (amount) => {
  return amount.toLocaleString("ARS", {
    style: "currency",
    currency: "ARS",
  });
};
