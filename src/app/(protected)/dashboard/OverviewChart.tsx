"use client";
import { AreaChart, Title } from "@tremor/react";

const chartdata2 = [
  {
    date: "Jan 23",
    2022: 45,
    2023: 78,
  },
  {
    date: "Feb 23",
    2022: 52,
    2023: 71,
  },
  {
    date: "Mar 23",
    2022: 48,
    2023: 80,
  },
  {
    date: "Apr 23",
    2022: 61,
    2023: 65,
  },
  {
    date: "May 23",
    2022: 55,
    2023: 58,
  },
  {
    date: "Jun 23",
    2022: 67,
    2023: 62,
  },
  {
    date: "Jul 23",
    2022: 60,
    2023: 54,
  },
  {
    date: "Aug 23",
    2022: 72,
    2023: 49,
  },
  {
    date: "Sep 23",
    2022: 65,
    2023: 52,
  },
  {
    date: "Oct 23",
    2022: 68,
    2023: null,
  },
  {
    date: "Nov 23",
    2022: 74,
    2023: null,
  },
  {
    date: "Dec 23",
    2022: 71,
    2023: null,
  },
];

export default function OverviewChart() {
  return (
    <div className="w-full h-[500px] 2xl:h-fit p-2 border border-[#E0E0E0] rounded-xl overflow-hidden">
      <Title>Closed Pull Requests</Title>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata2}
        index="date"
        categories={["2022", "2023"]}
        colors={["neutral", "indigo"]}
        yAxisWidth={30}
        connectNulls={true}
      />
    </div>
  );
}
