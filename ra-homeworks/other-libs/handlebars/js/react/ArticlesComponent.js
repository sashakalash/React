class Articles extends React.Component {
  render() {
    return <main className="container">
    {
      articles.map((article, index) => <article className="article" key={index}>
        <h2>{article.subject}</h2>
        <p>{article.body}</p>
      </article>)
    }
    </main>
  }
}