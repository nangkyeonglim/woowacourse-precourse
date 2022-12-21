const ascendingSort = (array) => {
  return array.sort((a, b) => a - b);
};

const roundToTwo = (num) => {
  return (+(Math.round(num + 'e+1') + 'e-1')).toFixed(1);
};

const localeString = (money) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

module.exports = { ascendingSort, roundToTwo, localeString };
