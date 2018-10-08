'use strict';

const sortData = (list, parametr) => {
  return list.sort((item1, item2) => 
    item1[`${parametr}`] > item2[`${parametr}`]  
    ? 1 : item1[`${parametr}`]  < item2[`${parametr}`]  
      ? -1 : 0
  );
}

const getSortDataName = (item, param) => {
  const date = new Date(item.date);
  if(param === 'month') { 
    item.month= date.toLocaleString("en-us", { month: "short" });
    item.monthNum = date.getMonth();
  } else if (param === 'year') {
    item.year = date.getFullYear();
  }
  return item;
}

const AggregationData = (items, param) => {
  const sortArr = [];
  items.map(item => {
    item = getSortDataName(item, param);        
    const data = sortArr.find(el => el[`${param}`] === item[`${param}`] );
    data ? data.amount += item.amount : sortArr.push(item);
  });
  sortData(sortArr, param === 'month' ? 'monthNum' : param);
  return sortArr;
}

const getParamName = (componentName) => {
  switch (componentName) {
    case 'MonthTable': {
      return 'month';
    };
    case 'YearTable': {
      return 'year';
    };
    case 'SortTable': {
      return 'date';
    };
  }
}

const GetSortingTable = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list
      }
    }

    componentWillReceiveProps(newProps) {
      const param = getParamName(Component.name);      
      this.setState({
        list: AggregationData(newProps.list, param)
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