'use strict';

class FontSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'abc',
    }
  }

  render() {
    const fontsList = this.props.fonts.map(item => 
      <FontItem 
        onSelect={() => this.props.onSelect(item)}
        item={item} 
        text={this.state.text}
      />
    )
    return (
      <div className="font-picker">{fontsList}</div>
    );
  }
}