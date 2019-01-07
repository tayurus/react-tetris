import React from "react";

import "./Field.css";

export const Field = props => {
  const { field, className } = props;
  return (
    <table className={"Field " + className}>
      <tbody>
        {field.map((row, rowindex) => {
          return (
            <tr key={rowindex}>
              {row.map((col, colIndex) => (
                <td key={colIndex} className={"Field__cell " + (col === 1 ? "Field__cell_fill" : "")} />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Field.defaultProps = {
  className: ""
};
