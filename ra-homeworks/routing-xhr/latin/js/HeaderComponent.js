
const HeaderComponent = ({ location }) => {
  const locationId = location.pathname.match(/^\/article\/(\d+)?$/i);
  return <nav className="navbar navbar-light bg-light">
  {locationId
    ? <p className="navbar-brand">Уникальный идентификатор статьи: {locationId[1]}</p>
    : <p className="navbar-brand">Статья не выбрана</p> 
  }
</nav>
}
  