import React from "react";
import { Form } from "antd";
import { FORM_ITEM_TYPE, COLUMNS, GUTTER } from "./constants";
import { AMIFormContext, AMIFormLayoutContext } from "./context";

const AMIForm = ({ children, form, formLayout = {}, ...props }, ref) => {
  const realLayout = {
    columns: COLUMNS[formLayout.columns || 1],
    type: FORM_ITEM_TYPE[formLayout.type || "wrap"],
    gutter: GUTTER[formLayout.gutter || "default"]
  };

  React.useImperativeHandle(ref, () => {
    ref = form;
  });

  return (
    <AMIFormLayoutContext.Provider value={realLayout}>
      <AMIFormContext.Provider value={form}>
        {React.cloneElement(
          <Form />,
          {
            form,
            labelAlign: "left",
            colon: false,
            layout: "horizontal",
            ...props
          },
          children
        )}
      </AMIFormContext.Provider>
    </AMIFormLayoutContext.Provider>
  );
};

// AMIForm.create = Form.create;

export default Form.create()(React.forwardRef(AMIForm));
