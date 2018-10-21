const { Input } = antd;

class Inputs extends React.Component {
  render() {
    return <div style={{ marginBottom: 16 }}>
      <Input 
      type="number"
      style={{ width: 500 }}
      addonBefore="Стоимость:" 
      addonAfter="руб." 
      name='price'
      />
      <Input 
      type="number"
      style={{ width: 500 }} 
      addonBefore="На руках:" 
      addonAfter="руб." 
      name="money"
      />
      <Input 
      type="number"
      style={{ width: 500 }} 
      addonBefore="Срок кредита:" 
      addonAfter="лет" 
      name="duration"
      />
    </div>
  }
}