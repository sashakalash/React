'use strict';

const emailRegEx = /[^\w@._-]/;
const passRegEx = /[^\w_]/;

const checkInput = e => {
  const regEx = e.currentTarget.type === 'email' ? emailRegEx : passRegEx;
  e.currentTarget.value = e.currentTarget.value.replace(regEx, '');
}

const AuthForm = ({onAuth}) => {
  let nameField, emailField, PassField;

  const NameBlock = props => (
    <div className="Input">
      <input ref={element => nameField = element} required type="text" placeholder="Имя" />
      <label></label>
    </div>
  )

  const EmailBlock = props => (
    <div className="Input">
      <input 
      ref={element => emailField = element} 
      onChange={checkInput}
      type="email" 
      placeholder="Электронная почта" 
      />
      <label></label>
    </div>
  )

  const PassBlock = props => (
    <div className="Input">
      <input 
      ref={element => PassField = element} 
      onChange={checkInput}
      required 
      type="password" 
      placeholder="Пароль" 
      />
      <label></label>
    </div>
  )

  const SubmitForm = e => {
    e.preventDefault();
    const userInfo = {
      name: nameField.value,
      email: emailField.value,
      password: PassField.value
    }
    onAuth && typeof onAuth === 'function'? onAuth(userInfo): null;
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
