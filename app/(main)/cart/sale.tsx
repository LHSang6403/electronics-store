interface SaleProps {
  data: string;
}

export default function Sale({ data }: SaleProps): JSX.Element {
  return (
    <div className="w-fit h-fit flex flex-row mt-1 text-base text-primary">
      <img
        className="w-5 h-5 relative -top-0.5"
        alt="sale-tag"
        src="/assets/sale-tag.png"
      ></img>
      <p className="sm:max-w-[150px] sm:text-base overflow-hidden whitespace-nowrap overflow-ellipsis -ml-3 border-[1px] border-primary sm:border-none rounded-lg px-2">
        {data}
      </p>
    </div>
  );
}
