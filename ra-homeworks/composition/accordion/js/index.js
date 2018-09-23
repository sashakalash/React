'use strict';

const Article = props => <div className="article">{props.children}</div>;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionClass: "section"
    }
  }
  toggle() {
    this.setState({
      sectionClass: this.state.sectionClass === "section" ? "section open" : "section"
    })
  }
  render() {
    return (
      <section className={this.state.sectionClass}>
        <button>toggle</button>
        <h3 onClick={this.toggle.bind(this)} className="sectionhead">{this.props.article.title}</h3>
        <div className="articlewrap">
          <Article>{this.props.article.text}</Article>
        </div>
      </section>
    );
  }
}

const articles = [
  {
    title: 'Компоненты',
    text: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
  },
  {
    title: 'Выучил раз, используй везде!',
    text: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
  },
  {
    title: 'Использование JSX',
    text: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
  }
];


ReactDOM.render(
  <main className="main">
    <h2 className="title">React</h2>
    {articles.map(article => <Section article={article}/>)}
  </main>,
 document.getElementById('accordian')
)