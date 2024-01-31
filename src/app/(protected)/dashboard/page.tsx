import OverviewTable from "@app/(protected)/dashboard/OverviewTable";
import OverviewChart from "@app/(protected)/dashboard/OverviewChart";
import PoleChart from "@app/(protected)/dashboard/PoleChart";

export default function User(): JSX.Element {
  return (
    <div className="w-full">
      <h1 className="text-2xl w-full font-medium text-center mx-auto">
        Internal Dashboard
      </h1>
      <div className="w-full grid grid-cols-2 xl:flex xl:flex-col gap-2 rounded-2xl py-2 bg-white">
        <div className="col-span-2">
          <OverviewChart />
        </div>
        <div className="col-span-1">
          <OverviewTable />
        </div>
        <div className="col-span-1">
          <PoleChart />
        </div>
      </div>
    </div>
  );
}
