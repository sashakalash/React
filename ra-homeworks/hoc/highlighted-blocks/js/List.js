'use strict';

const ComponentWrapping = () => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: null,
        Wrapper: null
      }
    }

    ComponentMaker = Component => {
      return class extends React.Component {
        render() {
          return <Component {...this.props}/>;
        }
      }
    }

    setTypeItem() {
      this.setState({
        Component: this.props.type == 'video' ? this.ComponentMaker(Video) : this.ComponentMaker(Article),
        Wrapper: this.props.views < 100 
          ? this.ComponentMaker(New) 
          : this.props.views >= 1000 
            ? this.ComponentMaker(Popular) 
            : null
      })
    }

    componentWillMount() {
      this.setTypeItem();
    }

    render() {
      const Wrapper = this.state.Wrapper;
      const Component = this.state.Component;
      return this.state.Wrapper ? <Wrapper><Component {...this.props}/></Wrapper> : <Component {...this.props}/>
    }
  }
}

const List = props => props.list.map(item => {
  const Component = ComponentWrapping();
  return <Component {...item}/>
});
