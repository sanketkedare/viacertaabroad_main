import React from "react";

const Table = ({ table }) => {
  return (
    <div className="p-4 lg:p-6 m-2 lg:m-4 rounded-2xl shadow-md overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 text-sm lg:text-base">
          <thead className="bg-gray-200">
            <tr>
              {table.headings.map((heading, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-2 py-3 text-left font-semibold whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.fields.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-2 py-2 whitespace-normal break-words max-w-[150px] lg:max-w-none"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
