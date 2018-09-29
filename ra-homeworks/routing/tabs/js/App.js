
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tabs">
          <Menu/>
          <div className="tabs__content">
            <Route path="/essay" component={Essay} />
            <Route path="/creator" component={Creator} />
            <Route path="/fortune" component={Fortune} />
          </div>
        </div>
      </Router>
    );
  }
}