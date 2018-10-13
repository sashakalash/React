
const {Route, Switch} = ReactRouterDOM;
const {createBrowserHistory} = History;
// const history = createBrowserHistory();
const {withRouter} = ReactRouterDOM;
console.log(Route)

class App extends React.Component {
  render() {
    return (
        <div>
          <Nav />
          <div className="container">
            <Subscribe />
            <ArticlesBlock {...articles} />
          </div>
        </div>
    );
  }
}
