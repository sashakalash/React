'use strict';

const emailRegEx = /[^\w@._-]/;
const passRegEx = /[^\w_]/;
const dataToSend = {};

const checkInput = (type, value) => {
  const regEx = type === 'email' ? emailRegEx : passRegEx;
  return value.replace(regEx, '');
}

const dataValidation = event => {
  const data = event.currentTarget;
  const eventType = data.type;
  const eventValue = data.value;
  if (eventType === "email" || eventType === "password" ) {
    data.value = checkInput(eventType, eventValue);
  }
  return data.value;
}

const AuthForm = props => {

  const NameBlock = () => (
    <div className="Input">
      <input required type="text" placeholder="Имя" name="name"/>
      <label></label>
    </div>
  )

  const EmailBlock = () => (
    <div className="Input">
      <input onChange={dataValidation} type="email" placeholder="Электронная почта" name="email"/>
      <label></label>
    </div>
  )

  const PassBlock = () => (
    <div className="Input">
      <input onChange={dataValidation} required type="password" placeholder="Пароль" name="password"/>
      <label></label>
    </div>
  )

  const submitForm = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const dataToSend = {};
    for (const el of data) {
      dataToSend[el[0]] = el[1];
    }
    if (props.onAuth && typeof props.onAuth === 'function') {
      props.onAuth(dataToSend);
    }
  }

  return (
    <form onSubmit={submitForm} className="ModalForm" action="/404/auth/" method="POST">
      <NameBlock />
      <EmailBlock />
      <PassBlock />
      <button type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}
