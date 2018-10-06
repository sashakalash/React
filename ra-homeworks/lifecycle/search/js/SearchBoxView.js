const SearchBoxView = (props) => (
  <section ref={props.SectionField} className="container">
    <div className="row">
      <div className="col-sm-12">
        <input
          className={`search-box ${props.fixed ? 'search-box_fixed' : null}`}
          placeholder="Поиск"
        >
        </input>
      </div>
    </div>
  </section> 
);
