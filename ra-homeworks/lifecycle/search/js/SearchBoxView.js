const SearchBoxView = (...props) => (
  <section className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          ref={props[0].SearchBoxViewField} 
          className={`search-box ${props[0].fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section> 
);
