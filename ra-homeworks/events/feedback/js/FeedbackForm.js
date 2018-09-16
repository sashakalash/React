'use strict';

const FeedbackForm = ({data}) => {
  const dataToSend = JSON.stringify(data);
  const sendForm = (dataToSend) => {

  }

  return (
    <form data={data} onSubmit={sendForm} classNameName="content__form contact-form">
      <div className="testing">
        <p>Чем мы можем помочь?</p>
      </div>
      <div className="contact-form__input-group">
      <input required={false} checked={data.salutation === "Мистер"} className="contact-form__input contact-form__input--radio" id="salutation-mr" name="salutation" type="radio" value="Мистер"/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">Мистер</label>
      <input required={false} checked={data.salutation === "Мисис"} className="contact-form__input contact-form__input--radio" id="salutation-mrs" name="salutation" type="radio" value="Мисис"/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mrs">Мисис</label>
      <input required={false} checked={data.salutation === "Мис"} className="contact-form__input contact-form__input--radio" id="salutation-ms" name="salutation" type="radio" value="Мис"/>
      <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-ms">Мис</label>
    </div>
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="name">Имя</label>
      <input required={false} value={data.name} className="contact-form__input contact-form__input--text" id="name" name="name" type="text"/>
    </div>
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
      <input required={false} value={data.email}  className="contact-form__input contact-form__input--email" id="email" name="email" type="email"/>
    </div>
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
      <select required={false} value={data.subject === 'У меня проблема' ? 1 : 2} className="contact-form__input contact-form__input--select" id="subject" name="subject">
        <option value="1">У меня проблема</option>
        <option value="2">У меня важный вопрос</option>
      </select>
    </div>
    <div className="contact-form__input-group">
      <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
      <textarea required={false} value={data.message} className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65"></textarea>
    </div>
    <div className="contact-form__input-group">
      <p className="contact-form__label--checkbox-group">Хочу получить:</p>
      <input required={false} checked={data.snacks.indexOf("пицца") != -1} className="contact-form__input contact-form__input--checkbox" id="snacks-pizza" name="snacks" type="checkbox" value="пицца"/>
      <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-pizza">Пиццу</label>
      <input required={false} checked={data.snacks.indexOf("пирог") != -1} className="contact-form__input contact-form__input--checkbox" id="snacks-cake" name="snacks" type="checkbox" value="пирог"/>
      <label className="contact-form__label contact-form__label--checkbox" htmlFor="snacks-cake">Пирог</label>
    </div>
      <button className="contact-form__button" type="submit">Отправить сообщение!</button>
      <output id="result" />
    </form>
  )
}

FeedbackForm.defaultProps = {
  salutation: 'Мистер',
  name: 'Гость',
  email: '',
  subject: 'У меня проблема',
  message: '',
  snacks: []
}