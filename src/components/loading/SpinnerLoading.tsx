import { Spinner } from "@nextui-org/react";

const SpinnerLoading = ({ isLoading }: { isLoading: boolean }): JSX.Element => {
  return <div className="h-5 w-5">{isLoading && <Spinner size="sm" />}</div>;
};

export default SpinnerLoading;
