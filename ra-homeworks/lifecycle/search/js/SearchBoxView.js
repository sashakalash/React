const SearchBoxView = (...props) => (
  <section ref={props[0].SectionField} className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${props[0].fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section> 
);
