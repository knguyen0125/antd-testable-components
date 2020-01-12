export const COLUMNS = Object.freeze({
  "1": { xs: 24, sm: 24, md: 24, lg: 24, xl: 24 },
  "2": { xs: 24, sm: 12, md: 12, lg: 12, xl: 12 },
  "3": { xs: 24, sm: 8, md: 8, lg: 8, xl: 8 },
  "4": { xs: 24, sm: 6, md: 6, lg: 6, xl: 6 }
});

export const FORM_ITEM_TYPE = Object.freeze({
  inline: {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
  },
  wrap: {
    labelCol: { xs: { span: 24 }, sm: { span: 24 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 24 } }
  },
  noLabel: {
    labelCol: { xs: { span: 0 }, sm: { span: 0 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 24 } }
  }
});

export const GUTTER = {
  default: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24, xxl: 32 }
};
