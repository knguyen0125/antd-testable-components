import React from "react";
import { DatePicker } from "antd";

const AMIDatePicker = ({ children, ...props }) => {
  return React.cloneElement(
    <DatePicker />,
    {
      "data-test-class": "ant-datepicker-trigger",
      "data-test-id": props.id,
      getCalendarContainer: triggerNode => {
        // Get ID of datepicker
        const id = triggerNode
          .querySelector("[data-test-class='ant-datepicker-trigger']")
          .getAttribute("data-test-id");

        // Set ID of container node
        const node = document.createElement("div");
        node.setAttribute("data-test-id", id);
        node.setAttribute("data-test-class", "ant-datepicker-container");

        document.body.appendChild(node);

        return node;
      },
      ...props
    },
    children
  );
};

export default AMIDatePicker;
