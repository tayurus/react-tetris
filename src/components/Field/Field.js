import React from "react";

import "./Field.css";

export const Field = props => {
  const { field, className, color } = props;
  console.log(color);
  return (
    <table className={"Field " + className}>
      <tbody>
        {field.map((row, rowindex) => {
          return (
            <tr key={rowindex}>
              {row.map((col, colIndex) => (
                <td
                  key={colIndex}
                  style={ { background: col === 1 ? color  : "" } }
                  className={"Field__cell " + (col === 1 ? "Field__cell_figure" : col === 2 ? "Field__cell_fixed" : "")}

                />
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
