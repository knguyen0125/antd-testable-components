import React from "react";
import { Select } from "antd";

const AMISelect = ({ children, options, ...props }) => {
  let allOptions = [];

  if (React.Children.count(children) > 0) {
    allOptions = React.Children.map(children, child => child);
  } else {
    options.forEach(option => {
      allOptions.push(
        <Select.Option {...option}>{option.title}</Select.Option>
      );
    });
  }

  return React.cloneElement(
    <Select />,
    {
      "data-test-id": props.id,
      "data-test-class": "ant-select-trigger",
      getPopupContainer: triggerNode => {
        const id = triggerNode
          .querySelector('[data-test-class="ant-select-trigger"]')
          .getAttribute("data-test-id");

        const node = document.createElement("div");
        node.setAttribute("data-test-class", "ant-select-container");
        node.setAttribute("data-test-id", id);

        document.body.appendChild(node);

        return node;
      },
      ...props
    },
    allOptions
  );
};

AMISelect.Option = Select.Option;
AMISelect.OptGroup = Select.OptGroup;

export default AMISelect;
