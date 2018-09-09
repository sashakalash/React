'use strict';
const Menu = (props) => {
  if (!props.opened) {
    return (
      <div className="menu">
        <div className="menu-toggle">
          <span></span>
        </div>
      </div>
    );
  } else {
    const menuItems = props.items.map((item) => <li><a href={item.href}>{item.title}</a></li>);
    return (
      <div className="menu menu-open">
        <div className="menu-toggle">
          <span></span>
        </div>
        <nav>
          <ul>
            {menuItems}
          </ul>
        </nav>
      </div>
    );
  }
};