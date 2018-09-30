
class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValid: true,
      errStyle: {visibility: 'hidden'} 
    }
  }

  emailValidate(event) {
    const valid = event.currentTarget.validity.valid;
    this.setState({
      email: event.currentTarget.value,
      isValid: !this.state.isValid,
    })
  }

  render() {
    return (
      <form>
        <input
          type="email"
          value={this.state.email}
          onChange={this.emailValidate.bind(this)}
          className={this.state.isValid ? 'is-valid' : 'is-error'}
        />
        <div style={this.state.isValid ? {visibility: 'hidden'} : {visibility: 'visible'}}>
          Пожалуйста, проверьте корректность адреса электронной почты
        </div>
      </form>
    )
  }
}