
const {Route, Switch, withRouter, Link, Prompt} = ReactRouterDOM;
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
} 

class App extends React.Component {
  render() {
    const Header = withRouter(Nav);
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/subscribe" component={SubscribtionPage} />
          <Route path="*" component={Main} />
        </Switch>
      </div>
    );
  }
}
