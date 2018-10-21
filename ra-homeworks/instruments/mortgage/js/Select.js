const { Select } = antd;
const Option = Select.Option;
const types = [
  {type: 'new_building', name: 'Квартира в новостройке'},
  {type: 'old_building', name: 'Готовая квартира'},
  {type: 'countryhouse', name: 'Загородный дом'}
]

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: types
    }
  }
  render() {
    return <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Выберите тип квартиры:"
    optionFilterProp="children"
    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
  >
    {this.state.types.map((item, index) => <Option value={item.type} key={index}>{item.name}</Option>)}
  </Select>
  }
}