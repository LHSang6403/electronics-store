import CartTable from "../components/cartTable";
import Payments from "../components/payments";

export default function Cart(): JSX.Element {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-fit py-1.5 flex flex-row justify-center items-center text-3xl font-semibold">
        Put sth here
      </div>
      <div className="w-full h-fit py-1.5 flex flex-row justify-center items-center text-3xl font-semibold">
        Your cart
      </div>
      <div className="w-[90%] max-w-full h-fit pr-4 mx-auto overflow-hidden rounded-xl border-2 border-black">
        <CartTable />
      </div>
      <div className="w-full h-fit bg-primary mt-8 py-4 flex flex-row justify-center items-center text-3xl font-semibold">
        Payment
      </div>
      <div className="w-[90%] h-fit mt-8 pb-8 mx-auto flex flex-row justify-center">
        <div className="w-1/2 h-full">Voucher, sale</div>
        <div className="w-1/2 h-full">
          <Payments />
        </div>
      </div>
    </div>
  );
}
