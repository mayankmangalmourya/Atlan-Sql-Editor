import { useMemo } from "react";

import BaseTable from "./index";

import { getFieldDetails, getPropTypes } from "../data/utils";

function ColumnsTable(Args) {
  const { result, isLoaded, error } = Args;
  const data = useMemo(() => {
    if (result.length === 0) {
      return [];
    }
    return Object.keys(result[0]).map((key, index) => ({
      column: key,
      type: getFieldDetails(key).type,
    }));
  }, [result]);

  const columns = useMemo(
    () => [
      {
        Header: "Column",
        accessor: "column",
        defaultCanSort: true,
      },
      {
        Header: "Type",
        accessor: "type",
        defaultCanSort: true,
      },
    ],
    []
  );

  return (
    <BaseTable
      columns={columns}
      data={data}
      isLoaded={isLoaded}
      error={error}
    />
  );
}

ColumnsTable.propTypes = getPropTypes("tab");

export default ColumnsTable;
