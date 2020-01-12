import React, { useContext } from "react";
import { Form, Col } from "antd";
import { AMIFormContext, AMIFormLayoutContext } from "../AMIForm/context";

const AMIFormItem = ({
  id,
  getFieldDecoratorOptions = {},
  children,
  ...props
}) => {
  const form = useContext(AMIFormContext);
  const formLayout = useContext(AMIFormLayoutContext);
  const getFieldDecorator = form ? form.getFieldDecorator : () => c => c;

  const withGetFieldDecorator = component => {
    const { style, children, ...props } = component.props;

    return getFieldDecorator(id, getFieldDecoratorOptions)(
      React.cloneElement(
        component,
        {
          id,
          style: { width: "100%", ...style },
          ...props
        },
        children
      )
    );
  };

  const Components = [];
  React.Children.forEach(children, child => {
    Components.push(child);
  });

  const Component = Components[0];

  if (!Component) return null;

  return (
    <Col {...formLayout.columns}>
      <Form.Item
        {...formLayout.type}
        colon={false}
        data-test-class="ant-label"
        {...props}
      >
        {withGetFieldDecorator(Component)}
      </Form.Item>
    </Col>
  );
};

export default AMIFormItem;
