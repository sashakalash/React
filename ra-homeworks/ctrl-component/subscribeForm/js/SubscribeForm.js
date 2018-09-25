
const ErrorMessage = props => props.isErr
    ? <div>Пожалуйста, проверьте корректность адреса электронной почты</div>
    : null;

class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isValid: '',
      isErr: false
    }
  }
  render() {
    return (
      <form>
        <input
          type="email"
          value={this.state.email}
          onChange={this.emailValidate.bind(this)}
          className={this.state.isValid}
        />
        <ErrorMessage isErr={this.state.isErr}/>
      </form>
    )
  }

  emailValidate(event) {
    const valid = event.currentTarget.validity.valid;
    this.setState({
      email: event.currentTarget.value,
      isValid: valid ? 'is-valid' : 'is-error',
      isErr: !valid
    })
  }
}