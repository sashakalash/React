class DataFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=50')
      .then(response => response.json())
      .then(logs => this.setState({ logs }));
  }

  render() {
    return (
      <App {...this.state}/>
    );
  }
};