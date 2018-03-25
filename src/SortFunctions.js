const sortDates = (a, b, order, name, data) => {

  let nxt = new Date(a).toISOString();
  let prev = new Date(b).toISOString();

  let indices = [0, 1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 19, 20, 21];
  let result = 0;
  if (order === 'asc') {
    indices.find(i => {
      result = nxt.charCodeAt(i) - prev.charCodeAt(i)
      return result;
    });
  } else if (order === 'desc') {
    indices.find(i => {
      return result = prev.charCodeAt(i) - nxt.charCodeAt(i)
    });
  }

  return result;
};

const sortDollarAmount = (current, next, order, dataField) => {
  let cur = parseFloat(current.replace('$', ''));
  let nxt = parseFloat(next.replace('$', ''));
  console.log(dataField);
  if (order === 'asc') {
    return nxt - cur;
  }
  return cur - nxt;
};

export { sortDates, sortDollarAmount };