'use strict';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSearchText: this.props.value,
      author: this.props.currentAuthor
    };
  }
  render() {
    return (
      <input
        value={this.props.currentAuthor ? this.props.currentAuthor : this.state.currentSearchText}
        onChange={this.findBook.bind(this)}
      />
    );
  }

  findBook(event) {
    const name = event.currentTarget.value;
    this.props.filterBooks(name);
    this.setState({
      currentSearchText: name
    });
  }
}