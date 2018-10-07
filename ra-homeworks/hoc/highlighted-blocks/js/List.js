'use strict';

const GetWrapper = (ComponentsWrapper, Component) => {
  return class extends React.Component {
    render() {
      return ComponentsWrapper
      ? <ComponentsWrapper><Component {...this.props}/></ComponentsWrapper> 
      : <Component {...this.props}/>;
    }
  }
}

const ComponentInWrapper = Component => {
  return class extends React.Component {
    render() {
      const typeOfWrapper = this.props.views < 100 ? New : this.props.views >= 1000 ? Popular : null;
      const ComponentsWrapper = GetWrapper(typeOfWrapper, Component);
      return <ComponentsWrapper {...this.props}/>;
    }
  }
}

const setTypeItem = item => {
  const componentType = item.type == 'video' ? Video : Article;
  const NewComponent = ComponentInWrapper(componentType);
  return <NewComponent {...item} /> ;
}

const List = props => props.list.map(setTypeItem);
