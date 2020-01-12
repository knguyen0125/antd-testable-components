import React from "react";
import { InputNumber } from "antd";

class AMIInputNumber extends React.Component {
  constructor(props) {
    super(props);
    this.inputNumber = null;
  }

  handlePressEnter = e => {
    // revalidate input
    this.inputNumber.blur();
    this.inputNumber.focus();

    if (this.props.onPressEnter) {
      this.props.onPressEnter();
    } else {
      const keyboardEvent = new KeyboardEvent("keypress");
      delete keyboardEvent.which;
      keyboardEvent.which = 13;
      e.target.dispatchEvent(keyboardEvent);
    }
  };

  render() {
    const { onPressEnter, ...others } = this.props;

    return (
      <InputNumber
        data-test-id={this.props.id}
        data-test-class="ant-input-number"
        ref={input => (this.inputNumber = input)}
        onPressEnter={this.handlePressEnter}
        {...others}
      />
    );
  }
}

export default AMIInputNumber;
