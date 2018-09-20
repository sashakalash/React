'use strict'

class App extends React.Component {
  constructor (props) {
		super(props);
		this.state = {
      selected: "All",
      projects: props.projects
    };
  }
  selectFilter(filter) {
    this.setState({
      selected: filter,
      projects: filter === "All"
        ? this.props.projects
        : this.props.projects.filter(project => project.category === filter)
    })    
  }
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.selected}
          onSelectFilter={filter => this.selectFilter(filter)} />
        <Portfolio projects={this.state.projects} />
      </div>
    )
  }
}

