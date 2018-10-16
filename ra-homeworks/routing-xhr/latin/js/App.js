class App extends React.Component {
  render() {
    const Header = withRouter(HeaderComponent);
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/article/:id" component={Story} />
          </Switch>
        </div>
      </Router>
    );
  }
};