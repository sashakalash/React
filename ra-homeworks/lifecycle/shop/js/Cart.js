class Cart extends React.Component {
  
  shouldComponentUpdate(newProps) {
    const hasChanges = this.props.isOpen !== newProps.isOpen;
    const itemsCountChanged = newProps.isOpen && this.props.items.length !== newProps.items.length;
    return  hasChanges || itemsCountChanged;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }
}
