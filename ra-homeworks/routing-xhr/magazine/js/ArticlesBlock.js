class ArticlesBlock extends React.Component {
  render() {
    return <div className="row m-3">
      {articles.map(article =>
        <div className="col-sm" key={article.id}><Article {...article} /></div>
      )}
    </div>
  }
}