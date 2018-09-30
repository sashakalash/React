
class TextRenderLine extends React.Component {
	typeText = (event) => {
		this.props.onChange(event.currentTarget.value)
	}
	render() {
		return (
			<div className="type-text">
				<textarea
					value={this.props.value}
					onChange={this.typeText}
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