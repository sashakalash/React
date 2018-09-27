
class TextRenderLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: this.props.value
		}
	}

	typeText(event) {
		this.setState({
			text: event.currentTarget.value
		})
		this.props.onChange(event.currentTarget.value)
	}

	render() {
		return (
			<div className="type-text">
				<textarea
					value={this.state.text}
					onChange={this.typeText.bind(this)}
					name="text"
					id="font-text"
					cols="30"
					rows="2"
					placeholder="Введите текст для футболки">
				</textarea>
			</div>
		)
	}
}