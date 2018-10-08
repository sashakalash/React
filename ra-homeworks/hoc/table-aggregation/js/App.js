'use strict';


const GetSortingTable = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list
      }
    }

    sortData(list, parametr) {
      return list.sort((item1, item2) => 
        item1[`${parametr}`] > item2[`${parametr}`]  
        ? 1 : item1[`${parametr}`]  < item2[`${parametr}`]  
          ? -1 : 0
      );
    }

    getSortDataName(item, param) {
      const date = new Date(item.date);
      if(param === 'month') { 
        item.month= date.toLocaleString("en-us", { month: "short" });
        item.monthNum = date.getMonth();
      } else if (param === 'year') {
        item.year = date.getFullYear();
      }
      return item;
    }

    AggregationData(items, param) {
      const sortArr = [];
      items.map(item => {
        item = this.getSortDataName(item, param);        
        const data = sortArr.find(el => el[`${param}`] === item[`${param}`] );
        data ? data.amount += item.amount : sortArr.push(item);
      });
      this.sortData(sortArr, param === 'month' ? 'monthNum' : param);
      return sortArr;
    }

    componentWillReceiveProps(newProps) {
      let param;
      switch (Component.name) {
        case 'MonthTable': {
          param = 'month';
        };
        break;
        case 'YearTable': {
          param = 'year';
        };
        break;
        case 'SortTable': {
          param = 'date';
        };
        break;
      }
      this.setState({
        list: this.AggregationData(newProps.list, param)
      })
    }

    render() {
      return <Component list={this.state.list} />
    }
  }
}

const SortMonthTable = GetSortingTable(MonthTable);
const SortYearTable = GetSortingTable(YearTable);
const SortDateTable = GetSortingTable(SortTable);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
      this.setState(response.data);
    });
  }

  render() {
    return (
      <div id="app">
        <SortMonthTable list={this.state.list}/>
        <SortYearTable list={this.state.list} />
        <SortDateTable list={this.state.list} />
      </div>
    );
  }
};