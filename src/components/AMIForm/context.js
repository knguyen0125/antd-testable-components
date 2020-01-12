import React from "react";
import { FORM_ITEM_TYPE, COLUMNS, GUTTER } from "./constants";

export const AMIFormLayoutContext = React.createContext({
  columns: COLUMNS[1],
  type: FORM_ITEM_TYPE["wrap"],
  gutter: GUTTER["default"]
});

export const AMIFormContext = React.createContext(null);
