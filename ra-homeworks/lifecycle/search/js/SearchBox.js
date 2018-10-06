class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fixed: false };
  }
  checkingBlockDIstance() {
  }

  componentDidMount() {
    console.log(this.SearchBox)
    window.addEventListener('scroll', this.checkingBlockDIstance.bind(this))
  }
  render() {
    return <SearchBoxView ref={el => this.SearchBox = el} fixed={this.state.fixed} />
  }

  isFixed() {
    return undefined;
  }

  setPosition() {
    return undefined;
  }
}
