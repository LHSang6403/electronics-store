export default function QuantityButton(): JSX.Element {
  return (
    <div className="flex flex-row justify-end items-center gap-2 sm:gap-3">
      <button onClick={() => {}}>
        <img
          className="w-3.5"
          alt="minus-icon"
          src="/assets/minus-icon.png"
        ></img>
      </button>
      <p className="text-lg">1</p>
      <button onClick={() => {}}>
        <img
          className="w-3.5"
          alt="plus-icon"
          src="/assets/plus-icon.png"
        ></img>
      </button>
    </div>
  );
}
