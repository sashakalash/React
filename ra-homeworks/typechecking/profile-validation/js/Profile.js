'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const urlChecking = (props, propName, componentName) => {
  if (!/^((https\:\/\/)(vk\.com\/)(id[0-9]+|[A-Za-z0-9_-]+))/.test(props[propName])) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/XXXXXXXX'. Validation failed.`);
  }
  return null;
};

const birthdayChecking = (props, propName, componentName) => {
  const now = new Date();
  const inputDate = new Date(props[propName]);
  if (inputDate > now) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting date less than ${now.toLocaleString("ru")}. Validation failed.`)
  }
  if (!/[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/.test(props[propName])) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
  }
}

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  url: urlChecking,
  birthday: birthdayChecking
}

Profile.defaultProps = {
  img: './images/profile.jpg'
}