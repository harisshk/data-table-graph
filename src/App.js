import Table from "./components/Table";
import { useEffect, useState } from "react";
import { getData } from "./services/productService";
import BarChart from "./components/Graph";
import { LIMIT, SKIP } from "./constants";

function App() {
  const limit = LIMIT;
  const skip = SKIP;
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);

  const fetchData = async (limit, skip) => {
    setIsLoading(true);
    const fetchedData = await getData({ limit, skip });

    if (fetchedData.products) {
      setData((prevData) => [...prevData, ...fetchedData.products]);
      setTotal(fetchedData.total);
    } else {
      setError(fetchedData.message);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(limit, skip);
  }, [limit, skip]);

  useEffect(() => {
    setSelectedRows(data.slice(0, 5).map((item) => item.id));
  }, [data]);

  const loadMoreData = () => {
    const newSkip = data.length;
    fetchData(limit, newSkip);
  };
  return (
    <div>
      {error && <p className="absolute top-0 left-0 text-red-500">{error}</p>}
      {isLoading && (
        <p className="absolute top-0 left-0 text-blue-500">Loading...</p>
      )}
      {!error && data.length !== 0 && (
        <>
          <BarChart data={data} selectedRows={selectedRows} />
          <Table
            data={data}
            setSelectedRows={setSelectedRows}
            selectedRows={selectedRows}
            loading={isLoading}
          />
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md"
              onClick={loadMoreData}
              disabled={data.length === total} // Disable button when all data is loaded
            >
              Load More
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
