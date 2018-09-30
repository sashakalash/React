
class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValid: '',
      errStyle: {visibility: 'hidden'} 
    }
  }

  emailValidate(event) {
    const valid = event.currentTarget.validity.valid;
    this.setState({
      email: event.currentTarget.value,
      isValid: valid ? 'is-valid' : 'is-error',
      errStyle: valid ? {visibility: 'hidden'} : {visibility: 'visible'}
    })
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <input
          type="email"
          value={this.state.email}
          onChange={this.emailValidate.bind(this)}
          className={this.state.isValid}
        />
        <div style={this.state.errStyle}>Пожалуйста, проверьте корректность адреса электронной почты</div>
      </form>
    )
  }
}