const Main = (props) => {
  return (
  <div className="container">
    <Subscribe />
    <ArticlesBlock articles={props.articles} />
  </div>
  )
}