'use strict';

class SearchBox extends React.Component {
 
  findBook = event => {
    const name = event.currentTarget.value;
    this.props.filterBooks(name);
  }

  render() {
    return (
      <input
        value={this.props.currentAuthor ? this.props.currentAuthor : this.props.value}
        onChange={this.findBook}
      />
    );
  }
}