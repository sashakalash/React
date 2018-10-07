'use strict';

const ComponentMaker = Component => {
  return class extends React.Component {
    render() {
      return <Component {...this.props}/>;
    }
  }
}

const ComponentWrapping = (Component, Wrapper) => {
  return class extends React.Component {
    render() {
      return Wrapper ? <Wrapper><Component {...this.props}/></Wrapper> : <Component {...this.props}/>
    }
  }
}

const setTypeItem = item => {
  const componentType = item.type == 'video' ? Video : Article;
  const typeOfWrapper = item.views < 100 ? New : item.views >= 1000 ? Popular : null;
  const Component = ComponentMaker(componentType);
  const ComponentWrapper = typeOfWrapper ? ComponentMaker(typeOfWrapper) : null;
  const ComponentInWrapper = ComponentWrapping(Component, ComponentWrapper)
  return <ComponentInWrapper {...item}/>
}

const List = props => props.list.map(setTypeItem);
