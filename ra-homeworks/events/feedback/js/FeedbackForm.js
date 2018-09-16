'use strict';

const FeedbackForm = ({data, onSubmit}) => {

  const SalutationBlock = props => (
      <div className="contact-form__input-group" >
        <input ref={element => salutationField.push(element)} required={false} defaultChecked={data.salutation === "Мистер"} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input ref={element => salutationField.push(element)} required={false} defaultChecked={data.salutation === "Мисис"} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input ref={element => salutationField.push(element)} required={false} defaultChecked={data.salutation === "Мис"} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
    );

  const NameBlock = props => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input ref={element => nameField = element} required={false} defaultValue={data.name} className="contact-form__input contact-form__input--text" id="name" name="name" type="text" />
      </div>
  );

  const EmailBlock = props => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input ref={element => emailField = element} required={false} defaultValue={data.email} className="contact-form__input contact-form__input--email" id="email" name="email" type="email" />
      </div>
  );

  const SubjectBlock = props => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select ref={element => subjectField = element} required={false} defaultValue={data.subject} className="contact-form__input contact-form__input--select" id="subject" name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
  );

  const MessageBlock = props => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea ref={element => messageField = element} required={false} defaultValue={data.message} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
      </div>
  );

  const SnacksBlock = props => (
    <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input ref={element => snacksField.push(element)} required={false} defaultChecked={data.snacks.indexOf("пицца") != -1} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input ref={element => snacksField.push(element)} required={false} defaultChecked={data.snacks.indexOf("пирог") != -1} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
  );

  let salutationField =[], 
  nameField, 
  emailField, 
  subjectField, 
  messageField, 
  snacksField = [];
 
  const sendForm = (e) => {
    e.preventDefault();
    const dataToSend = {
      salutation: salutationField.find(item => item.checked).value,
      name: nameField.value,
      email: emailField.value,
      subject: subjectField.value,
      message: messageField.value,
      snacks: snacksField.find(item => item.checked).value
    };
    onSubmit(JSON.stringify(dataToSend))
  };
  
  return (
    <form data={data} onSubmit={sendForm} classNameName="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <SalutationBlock />
      <NameBlock />
      <EmailBlock />
      <SubjectBlock />
      <MessageBlock />
      <SnacksBlock />
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
}