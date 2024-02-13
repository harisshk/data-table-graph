import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function BarChart(props) {
  const { data, selectedRows } = props;
  const [graphData, setGraphData] = useState({
    x: [],
    y: [],
  });

  const handleGraph = () => {
    const selectedData = data.filter((item) => selectedRows.includes(item.id));
    const x = selectedData.map((item) => {
      return item.category;
    });
    const y = selectedData.map((item) => {
      return item.stock;
    });
    setGraphData({ x, y });
  };
  useEffect(() => {
    handleGraph();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRows]);
  const layout = {
    title: "Bar Chart",
    xaxis: {
      title: "X Axis Title",
    },
    yaxis: {
      title: "Y Axis Title",
    },
  };

  return (
    <div>
      <Plot
        data={[
          {
            type: "bar",
            x: graphData.x,
            y: graphData.y,
            orientation: "v",
          },
        ]}
        layout={layout}
        style={{ width: "100%", height: "400px" }} // Adjust dimensions as needed
      />
    </div>
  );
}

export default BarChart;
