import React from "react";

function Table(props) {
  const { data, setSelectedRows, selectedRows, loading } = props;

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Discount
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item?.id} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item?.brand}
                </th>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.discountPercentage} %</td>
                <td className="px-6 py-4">{item.stock}</td>
                <td className="px-6 py-4">{item.rating}</td>
                <td className="px-6 py-4">
                  <input
                    name="Select"
                    type="checkbox"
                    checked={selectedRows.includes(item?.id)}
                    onChange={() => handleCheckboxChange(item?.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
            {loading && <tr><td colSpan={7}>Loading...</td></tr>}
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
