const { Form, Button } = antd;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 4 },
    sm: { span: 6 },
  },
};

class MortgateCalculator extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.nativeEvent.target)
    const dataToSend = {};
    for (const el of data) {
      dataToSend[el[0]] = el[1];
    }
    console.log(dataToSend)
  }
  render() {
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout}>
            <Autocomplete />
          </FormItem>
          <FormItem {...formItemLayout}>
            <Inputs />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">Отправить</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}
