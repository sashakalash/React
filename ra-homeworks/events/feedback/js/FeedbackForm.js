'use strict';

const FeedbackForm = props => {
  const SalutationBlock = () => (
      <div className="contact-form__input-group" >
        <input required={false} defaultChecked={props.data.salutation === "Мистер"} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
        <input required={false} defaultChecked={props.data.salutation === "Мисис"} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
        <input required={false} defaultChecked={props.data.salutation === "Мис"} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис" />
        <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
      </div>
    );

  const NameBlock = () => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="name">Имя</label>
        <input required={false} defaultValue={props.data.name} className="contact-form__input contact-form__input--text" id="name" name="name" type="text" />
      </div>
  );

  const EmailBlock = () => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
        <input required={false} defaultValue={props.data.email} className="contact-form__input contact-form__input--email" id="email" name="email" type="email" />
      </div>
  );

  const SubjectBlock = () => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
        <select required={false} defaultValue={props.data.subject} className="contact-form__input contact-form__input--select" id="subject" name="subject">
          <option>У меня проблема</option>
          <option>У меня важный вопрос</option>
        </select>
      </div>
  );

  const MessageBlock = () => (
    <div className="contact-form__input-group">
        <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
        <textarea required={false} defaultValue={props.data.message} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
      </div>
  );

  const SnacksBlock = () => (
    <div className="contact-form__input-group">
        <p className="contact-form__label--checkbox-group">Хочу получить:</p>
        <input required={false} defaultChecked={props.data.snacks.includes("пицца")} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
        <input required={false} defaultChecked={props.data.snacks.includes("пирог")} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог" />
        <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
      </div>
  );
 
  const handleChange = (e) => {
    e.preventDefault();
    const data = new FormData(event.currentTarget)
    const dataToSend = {};
    for (const el of data) {
      dataToSend[el[0]] = el[1];
    }
    props.onSubmit(JSON.stringify(dataToSend))
  };
  
  return (
    <form data={props.data} onSubmit={handleChange} classNameName="content__form contact-form">
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