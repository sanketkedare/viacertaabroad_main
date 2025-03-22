import React from "react";

const Table = ({ table }) => {
  return (
    <div className="lg:p-6 lg:m-4 rounded-2xl shadow-md">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {table.headings.map((heading, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 bg-gray-200 text-left font-semibold"
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
                    className="border border-gray-300 px-4 py-2"
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
