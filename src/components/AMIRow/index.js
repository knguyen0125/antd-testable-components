import React, { useContext } from "react";
import { Row } from "antd";
import { AMIFormLayoutContext } from "../AMIForm/context";

const AMIRow = ({ children, ...props }) => {
  const formLayout = useContext(AMIFormLayoutContext);

  return React.cloneElement(
    <Row />,
    {
      gutter: formLayout.gutter,
      ...props
    },
    children
  );
};

export default AMIRow;
