import './App.css';
import 'antd/dist/antd.css';
import { Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Mentions, Button } from 'antd';
function App() {
  const apiUrl = 'http://localhost:8888/api/v1';
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  const onFinish = async (values) => {
    //moment.js
    try {
      let response = await fetch(`${apiUrl}/createPayment`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({...values, 
          expDate: values.expDate.format('MM/YYYY')
        })
      })
      if (response.ok) {
        let result = await response.json()
        if (result.RequestId) {
          alert('success')
        } else {
          alert('error')
        }
      } else {
        alert('error')
      }
    } catch(error) {
      console.log(error)
    }
    console.log('Success:', values);
  };

  return (
    <div className='App'>
      <Form
       initialValues={{
        cardNumber: null,
        expDate: null,
        cvv: null,
        amount: null
       }}
       onFinish={onFinish} 
       name="payForm" 
       {...formItemLayout} 
       autoComplete="off">
        <Form.Item
          name="cardNumber"
          rules={[
            { required: true, message: 'field is required'},
            { max: 16, message: 'Сard number must contain 16 digits' },
            { pattern: /^(0|[1-9][0-9]*)$/, message: 'Сard number is only digits' },
          ]}
          label="Card Number"
        >
        <Input maxLength={16} />
        </Form.Item>
        <Form.Item name="expDate" rules={[{ required: true, message: 'field is required' }]} label="expDate">
        <DatePicker
         format={'MM/YYYY'}
          style={{
            width: '100%',
          }}
        />
       </Form.Item>
       <Form.Item
          label="Cvv"
          name='cvv'
          rules={[
            { max: 3, message: 'Cvv must contain 3 digits' },
            { pattern: /^(0|[1-9][0-9]*)$/, message: 'Cvv is only digits' },
            { required: true, message: 'field is required' },
          ]}
        >
        <Input maxLength={3} />
        </Form.Item>
        <Form.Item
          label="amount"
          name='amount'
          rules={[{ required: true, message: 'field is required' }]}
        >
        <InputNumber style={{
            width: '100%',
          }} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Send
       </Button>
      </Form>
    </div>
  );
}

export default App;
