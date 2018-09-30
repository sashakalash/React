'use strict';

class FontSelector extends React.Component {
  render() {
    return (
      <div className="font-picker">{
        this.props.fonts.map((font, index) => {
          return (
            <div key={index} className="grid center font-item">
              <input type="radio" name="font" value={font.name} onChange={() => this.props.onSelect(font)} id={font.name} />
              <label htmlFor={font.name} className="grid-1">
                <PictureFont text={"abc"} path={font.path} />
              </label>
            </div>
          );
        })
      }
      </div>
    );
  }
}