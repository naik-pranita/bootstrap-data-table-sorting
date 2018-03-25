import { dateFormatter } from './FormatterFunctions';
import { sortDates, sortDollarAmount } from './SortFunctions';


const getDate = (key, name) => {
  return {
    dataField: key,
    text: name,
    sort: true,
    formatter: dateFormatter,
    sortFunc: sortDates,
    style: {
      width: '30%'
    }
  }
};

const getString = (key, name) => {
  return {
    dataField: key,
    text: name,
    sort: true,
    style: {
      width: '40%'
    }
  }
};

const getDollarAmt = (key, name) => {
  return {
    dataField: key,
    text: name,
    sort: true,
    sortFunc: sortDollarAmount,
    style: {
      width: '30%'
    }
  }
};

export { getDate, getString, getDollarAmt };