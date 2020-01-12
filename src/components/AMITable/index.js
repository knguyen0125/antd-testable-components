import React from "react";
import { Table } from "antd";
import { cloneDeep, isString } from "lodash";

const AMITable = ({
  columns,
  onRow,
  onHeaderRow,
  rowKey = "id",
  children,
  ...props
}) => {
  let colIndex = 0;
  const recursiveAddTestId = column => {
    const newColumn = cloneDeep(column);

    if (!isString(column.title) && !("displayTitle" in column)) {
      console.error("displayTitle not declared for non-string titles");
    }

    newColumn.onCell = (record, rowIndex) => {
      const colProps = column.onCell ? column.onCell(record, rowIndex) : {};
      const colName = isString(column.title)
        ? column.title
        : column.displayTitle;

      let testProps = {};
      if ("dataIndex" in column || "key" in column) {
        testProps = {
          "data-test-class": "ant-table-cell",
          "data-test-row-index": rowIndex,
          "data-test-column-index": colIndex,
          "data-test-column-name": colName,
          "data-test-record-id": record[rowKey],
          ...testProps
        };
      }

      return {
        ...testProps,
        ...colProps
      };
    };

    newColumn.onHeaderCell = props => ({
      "data-test-class": "ant-table-header-cell",
      "data-test-column-name": isString(column.title)
        ? column.title
        : column.displayTitle
    });

    if (newColumn.children) {
      newColumn.children = newColumn.children.map(recursiveAddTestId);
    }
    colIndex += 1;

    return newColumn;
  };

  const columnsWithTestId = columns.map(recursiveAddTestId);

  const onRowWithTestId = (record, index) => ({
    "data-test-class": "ant-table-row",
    "data-test-row-index": index,
    "data-test-record-id": record[rowKey],
    ...(onRow ? onRow(record, index) : {})
  });

  const onHeaderRowWithTestId = columns => ({
    "data-test-class": "ant-table-header-row",
    ...(onHeaderRow ? onHeaderRow(columns) : {})
  });

  return React.cloneElement(
    <Table />,
    {
      "data-test-class": "ant-table",
      "data-test-id": props.id,
      columns: columnsWithTestId,
      onRow: onRowWithTestId,
      onHeaderRow: onHeaderRowWithTestId,
      rowKey,
      ...props
    },
    children
  );
};

export default AMITable;
