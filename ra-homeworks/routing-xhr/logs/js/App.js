class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: this.props.logs
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      logs: newProps.logs
    })
  }
  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Текущие данные</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/archive">Архив</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Current {...this.state} />
            </Route>
            <Route path="/archive">
              <Archive {...this.state} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
};