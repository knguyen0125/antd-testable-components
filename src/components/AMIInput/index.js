import React from "react";
import { Input } from "antd";

const AMIInput = ({ children, ...props }) => {
  return React.cloneElement(
    <Input />,
    {
      "data-test-class": "ant-input",
      "data-test-id": props.id,
      ...props
    },
    children
  );
};

export default AMIInput;
