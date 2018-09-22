'use strict';

const colorsTypes = {
  unisex: 'black',
  male: 'blue',
  female: 'orange'
}

class ListItem extends React.Component {
  render() {
    const {item} = this.props;
    const color = colorsTypes[item.type];
    return <Item color={color} item={item} />
  }
}

class App extends React.Component {
  render() {
    return (
      <main>
        {items.map(item => <ListItem item={item} />)}
      </main>
    )
  }
}

