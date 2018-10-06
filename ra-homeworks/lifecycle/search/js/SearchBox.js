class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false};
  }
 
  componentDidMount() {
    window.addEventListener('scroll', this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  render() {
    return <SearchBoxView SearchBoxViewField={el => {this.SearchBox = el}} fixed={this.state.fixed} />
  }

  isFixed() {
    return this.SearchBox.getBoundingClientRect().top <= 0;
  }

  setPosition = () => {
    this.setState({
      fixed: this.isFixed()
    })
  }
}
