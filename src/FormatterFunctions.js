const formatValues = (value) => {
  return value > 9 ? value : `0${value}`;
}

const dateFormatter = (date) => {
  let simpleDate = new Date(date);
  return `${formatValues(simpleDate.getMonth() + 1)}-${formatValues(simpleDate.getDate())}-${simpleDate.getFullYear()}`
};


export { dateFormatter };
