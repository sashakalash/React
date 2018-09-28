'use strict';

const Now = new Date();

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required} placeholder={props.date}/>
    </div>
  )
};

DateInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool,
  date: PropTypes.string
}

const options = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};

DateInput.defaultProps = {
  date: Now.toLocaleString("ru", options) 
}