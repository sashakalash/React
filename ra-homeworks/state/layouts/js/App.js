'use strict';

const VIEW_LIST = "view_list";
const VIEW_MODULE = "view_module";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: VIEW_MODULE,
      cardView: true
    }
  }
  render() {
    return (
      <div>
        <div className="toolbar">
          <IconSwitch
            icon={this.state.icon}
            onSwitch={() => this.switchIcon()} />
        </div>
        {this.renderLayout(true)}
      </div>
    );
  }

  switchIcon() {
    this.setState({
      icon: this.state.icon === VIEW_LIST ? VIEW_MODULE : VIEW_LIST,
      cardView: this.state.icon !== VIEW_LIST
    })
  }

  renderLayout() {
    if (this.state.cardView) {
      return (
        <CardsView
          layout={this.props.layout}
          cards={this.getShopItems(this.props.products, this.state.cardView)} />
      );
    }
    return (<ListView items={this.getShopItems(this.props.products, this.state.cardView)} />);
  }

  getShopItems(products) {
    return products.map(product => {
      let cardProps = {
        title: product.name,
        caption: product.color,
        img: product.img,
        price: `$${product.price}`
      };
      if (this.state.cardView) {
        return (
          <ShopCard {...cardProps}/>
        );
      }
      return (<ShopItem {...cardProps}/>)
    });
  }
}
