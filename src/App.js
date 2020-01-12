import React from "react";
import {
  AMIButton,
  AMIForm,
  AMIFormItem,
  AMIInputNumber,
  AMIRow,
  AMIInput,
  AMIDatePicker,
  AMISelect,
  AMITable
} from "./components";
import "antd/dist/antd.min.css";

const TestForm = props => {
  return (
    <AMIForm
      ref={props.formRef}
      onSubmit={props.onSubmit}
      formLayout={{ columns: 3 }}
    >
      <AMIRow>
        <AMIFormItem id="input_number" label="Input Number">
          <AMIInputNumber />
        </AMIFormItem>
        <AMIFormItem id="input" label="Input">
          <AMIInput />
        </AMIFormItem>
        <AMIFormItem id="datepicker" label="Date Picker">
          <AMIDatePicker />
        </AMIFormItem>
        <AMIFormItem id="datepicker2" label="Date Picker 2">
          <AMIDatePicker />
        </AMIFormItem>
        <AMIFormItem id="select" label="Select">
          <AMISelect>
            <AMISelect.Option value="test">Test</AMISelect.Option>
          </AMISelect>
        </AMIFormItem>
        <AMIFormItem
          id="select2"
          label="Select 2"
          getFieldDecoratorOptions={{ initialValue: "ty" }}
        >
          <AMISelect
            searchable
            options={[
              { title: "test", value: "ty" },
              { title: "This is pretty good", value: "test", disabled: true }
            ]}
          />
        </AMIFormItem>
      </AMIRow>
      <AMIButton htmlType="submit" type="primary">
        Submit
      </AMIButton>
    </AMIForm>
  );
};

// const dataSource = [
//   {
//     id: "112343214",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street"
//   },
//   {
//     id: "41234312",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street"
//   }
// ];

// const columns = [
//   {
//     title: "ID",
//     dataIndex: "id",
//     key: "id",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name"
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     key: "age"
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     key: "address"
//   }
// ];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 100,
    fixed: "left",
    filters: [
      {
        text: "Joe",
        value: "Joe"
      },
      {
        text: "John",
        value: "John"
      }
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0
  },
  {
    title: "Other",
    children: [
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        width: 150,
        sorter: (a, b) => a.age - b.age
      },
      {
        title: "Address",
        children: [
          {
            title: "Street",
            dataIndex: "street",
            key: "street",
            width: 150
          },
          {
            title: "Block",
            children: [
              {
                title: "Building",
                dataIndex: "building",
                key: "building",
                width: 100
              },
              {
                title: "Door No.",
                dataIndex: "number",
                key: "number",
                width: 100
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Company",
    children: [
      {
        title: "Company Address",
        dataIndex: "companyAddress",
        key: "companyAddress",
        width: 200
      },
      {
        title: "Company Name",
        dataIndex: "companyName",
        key: "companyName"
      }
    ]
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    width: 80,
    fixed: "right"
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: "John Brown",
    age: i + 1,
    street: "Lake Park",
    building: "C",
    number: 2035,
    companyAddress: "Lake Street 42",
    companyName: "SoftLake Co",
    gender: "M"
  });
}

const App = props => {
  const formRef = React.useRef();

  const handleSubmit = e => {
    e.preventDefault();

    formRef.current.validateFieldsAndScroll((err, values) => {
      if (err) return;
      console.log(values);
    });
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <TestForm formRef={formRef} onSubmit={handleSubmit} />
      <div style={{ marginBottom: "3rem" }} />
      <AMITable
        id="testTable"
        dataSource={data}
        columns={columns}
        scroll={{ x: "max-content" }}
        rowKey="key"
      />
    </div>
  );
};

export default App;
