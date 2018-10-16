const ArticlePage = ({ location }) => {
  const articleId = location.pathname.match(/^\/article\/(\d+)?$/i);
  const article = articles.find(a => a.id === parseInt(articleId[1]))
  return (
    <div>
      <article className="container m-5">
        <h1>{article.title}</h1>
        {article.body.split('\n').map(text => <p key={text}>{text}</p>)}
      </article>
    </div>
  );
}