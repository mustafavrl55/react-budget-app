"use client";
import { MyContext } from "@/context/my-context";
import { useContext } from "react";

import Chart from "react-apexcharts";

export default function Statictis() {
  const { items } = useContext(MyContext);

  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: items.map(item => item.itemDate),
    }
  };

  const  series = [{
    name: "Desktops",
    data: items.map(item => item.itemPrice)
}];
console.log(items)
  return (
    <div id="chart" className=" pt-24">
      <Chart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
}


