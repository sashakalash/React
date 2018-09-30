'use strict';

const emailRegEx = /[^\w@._-]/;
const passRegEx = /[^\w_]/;
const dataToSend = {};

const checkInput = (type, value) => {
  const regEx = type === 'email' ? emailRegEx : passRegEx;
  value = value.replace(regEx, '');
}

const AuthForm = props => {

  const enterData = event => {
    const eventType = event.currentTarget.type;
    const eventKey = event.currentTarget.name;
    const eventValue = event.currentTarget.value;
    if (eventType === "email" || eventType === "password" ) {
      checkInput(eventType, eventValue);
    }
    dataToSend[eventKey] = eventValue;
  }

  const NameBlock = () => (
    <div className="Input">
      <input onChange={enterData} required type="text" placeholder="Имя" name="name"/>
      <label></label>
    </div>
  )

  const EmailBlock = () => (
    <div className="Input">
      <input onChange={enterData} type="email" placeholder="Электронная почта" name="email"/>
      <label></label>
    </div>
  )

  const PassBlock = () => (
    <div className="Input">
      <input onChange={enterData} required type="password" placeholder="Пароль" name="password"/>
      <label></label>
    </div>
  )

  const SubmitForm = e => {
    e.preventDefault();
    if (props.onAuth && typeof props.onAuth === 'function') {
      props.onAuth(dataToSend);
    }
  }

  return (
    <form onSubmit={SubmitForm} className="ModalForm" action="/404/auth/" method="POST">
      <NameBlock />
      <EmailBlock />
      <PassBlock />
      <button onClick={SubmitForm} type="submit">
        <span>Войти</span>
        <i className="fa fa-fw fa-chevron-right"></i>
      </button>
    </form>
  )
}
