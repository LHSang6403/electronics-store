import CartTable from "../components/cartTable";
export default function Cart(): JSX.Element {
  return (
    <div className="w-full h-auto mb-8">
      <div className="w-full h-fit py-1.5 flex flex-row justify-center items-center text-3xl font-medium">
        Your cart
      </div>
      <div className="w-fit h-fit pr-4 mx-auto overflow-hidden rounded-xl border-2 border-black">
        <CartTable />
      </div>
    </div>
  );
}
