import { BarChart, Title } from "@tremor/react";

const chartdata2 = [
  {
    name: "Drill",
    "Group A": 890,
    "Group B": 338,
    "Group C": 538,
    "Group D": 396,
    "Group E": 138,
    "Group F": 436,
  },
  {
    name: "Argitator",
    "Group A": 289,
    "Group B": 233,
    "Group C": 253,
    "Group D": 333,
    "Group E": 133,
    "Group F": 533,
  },
  {
    name: "Iron",
    "Group A": 380,
    "Group B": 535,
    "Group C": 352,
    "Group D": 718,
    "Group E": 539,
    "Group F": 234,
  },
  {
    name: "Light",
    "Group A": 90,
    "Group B": 98,
    "Group C": 28,
    "Group D": 33,
    "Group E": 61,
    "Group F": 53,
  },
];

// const valueFormatter = (number: any) =>
//   `$ ${new Intl.NumberFormat("us").format(number).toString()}`;

export default function PoleChart() {
  return (
    <div className="w-full h-auto p-2 border overflow-hidden rounded-xl border-[#E0E0E0]">
      <Title>Sold Categories</Title>
      <BarChart
        className="w-full file:mt-1"
        data={chartdata2}
        index="name"
        categories={[
          "Group A",
          "Group B",
          "Group C",
          "Group D",
          "Group E",
          "Group F",
        ]}
        colors={["#FCFCFC", "teal", "amber", "rose", "indigo", "emerald"]}
        // valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </div>
  );
}
