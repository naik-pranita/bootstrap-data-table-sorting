import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import BootstrapTable from 'react-bootstrap-table-next';

import Products from './Products';
import { getDate, getString, getDollarAmt } from './ColumnFields';


const columns = [getDate('date', 'Date'), getString('name', 'Product Name'), getDollarAmt('price', 'Product Price')];

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <BootstrapTable keyField='date' data={Products} columns={columns} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));


// const sortDates = (a, b, order, name, data) => {

//   let nxt = new Date(a).toISOString();
//   let prev = new Date(b).toISOString();

//   let indices = [0, 1, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 19, 20, 21];
//   let result = 0;
//   if (order === 'asc') {
//     indices.find(i => {
//       result = nxt.charCodeAt(i) - prev.charCodeAt(i)
//       return result;
//     });
//   } else if (order === 'desc') {
//     indices.find(i => {
//       return result = prev.charCodeAt(i) - nxt.charCodeAt(i)
//     });
//   }

//   return result;
// }

// const formatValues = (value) => {
//   return value > 9 ? value : `0${value}`;
// }

// const dateFormatter = (date) => { let simpleDate = new Date(date); return `${formatValues(simpleDate.getMonth() + 1)}-${formatValues(simpleDate.getDate())}-${simpleDate.getFullYear()}` };

// const columns = [{
//   dataField: 'date',
//   text: 'Date',
//   sort: true,
//   formatter: dateFormatter,
//   sortFunc: sortDates
// },
// {
//   dataField: 'name',
//   text: 'Product Name',
//   sort: true
// }, {
//   dataField: 'price',
//   text: 'Product Price',
//   sort: true,
//   sortFunc: (current, next, order, dataField) => {
//     let cur = parseFloat(current.replace('$', ''));
//     let nxt = parseFloat(next.replace('$', ''));
//     console.log(dataField);
//     if (order === 'asc') {
//       return nxt - cur;
//     }
//     return cur - nxt;
//   }
// }];


