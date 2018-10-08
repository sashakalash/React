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
      return list.sort((item1, item2) => item1[`${parametr}`] > item2[`${parametr}`]  ? 1 : item1[`${parametr}`]  < item2[`${parametr}`]  ? -1 : 0);
    }

    monthAggregation(items) {
      const sortArr = [];
      items.map(item => {
        const date = new Date(item.date);
        const monthNum = date.getMonth();
        item.month = date.toLocaleString("en-us", { month: "short" });
        const data = sortArr.find(el => el? el.month === item.month : null);
        data ? data.amount += item.amount : sortArr[monthNum] = item;
      });
      return sortArr;
    }

    yearAggregation(items) {
      const sortArr = [];
      items.map(item => {
        item.year = new Date(item.date).getFullYear();
        const data = sortArr.find(el => el.year === item.year);
        data ? data.amount += item.amount : sortArr.push(item)
      });
      this.sortData(sortArr, 'year')
      return sortArr;
    }

    dateAggregation(items) {
      const sortArr = [];
      items.map(item => {
        const data = sortArr.find(el => el.date === item.date);
        data ? data.amount += item.amount : sortArr.push(item)
      });
      this.sortData(sortArr, 'date')
      return sortArr;
    }

    componentWillReceiveProps(newProps) {
      switch (Component) {
        case MonthTable: {
          this.setState({
            list: this.monthAggregation(newProps.list)
          })
        };
        break;
        case YearTable: {
          this.setState({
            list: this.yearAggregation(newProps.list)
          })
        };
        break;
        case SortTable: {
          this.setState({
            list: this.dateAggregation(newProps.list)
          })
        }
      }
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