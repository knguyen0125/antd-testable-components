import React from "react";
import { Button } from "antd";

const AMIButton = ({ children, ...props }) => {
  return React.cloneElement(
    <Button />,
    {
      "data-test-class": "ant-button",
      "data-test-id": props.id,
      ...props
    },
    children
  );
};

export default AMIButton;
