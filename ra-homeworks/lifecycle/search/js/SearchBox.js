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
    return <SearchBoxView 
      SectionField={el => this.SearchSectionBlock = el}
      fixed={this.state.fixed} />
  }

  isFixed() {
    const SearchSectionBlockCoord = this.SearchSectionBlock.getBoundingClientRect();
    return SearchSectionBlockCoord.top <= 0; 
  }

  setPosition = () => {
    const isNeedToFix = this.isFixed();
    isNeedToFix !== this.state.fixed ? this.setState({fixed : isNeedToFix}) : null;
  }
}
