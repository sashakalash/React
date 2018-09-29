class Menu extends React.Component {
  render() {
    return (
      <nav className="tabs__items">
        <NavLink exact className="tabs__item" to="/essay" activeClassName="tabs__item-active">Рефераты</NavLink>
        <NavLink exact className="tabs__item" to="/creator" activeClassName="tabs__item-active">Криэйтор</NavLink>
        <NavLink exact className="tabs__item" to="/fortune" activeClassName="tabs__item-active">Гадалка</NavLink>
      </nav>
    );
  }
}