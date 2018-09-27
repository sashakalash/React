'use strict';

class FontItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
    }
  }


  render() {
    return (
      <div className="grid center font-item">
        <input 
          type="radio" 
          name="font" 
          value={this.props.item.name}
          onChange={this.props.onSelect} 
          id={this.props.item.name}
        />
        <label forHTML={this.props.item.name}  className="grid-1">
          <PictureFont text={this.state.text} path={this.props.item.path} />
        </label>
      </div>
    )
  }
}
