
const {Route, Switch, withRouter, Link} = ReactRouterDOM;


class App extends React.Component {
  render() {
    const Header = withRouter(Nav);
    return (
      <div>
        <Header />
        <Main />
        {/* <Switch> */}
          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route path='/article/:id' component={ArticlePage} /> */}
          <Route path='./article/:id' render={() => <ArticlePage />}/>
        {/* </Switch> */}
      </div>
    );
  }
}
