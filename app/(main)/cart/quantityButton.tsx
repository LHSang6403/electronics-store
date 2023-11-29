import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "@redux/actions/cart";

interface QuantityButtonProps {
  id: number;
  quantity: number;
}

export default function QuantityButton({
  id,
  quantity,
}: QuantityButtonProps): JSX.Element {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row justify-end items-center gap-2 sm:gap-3">
      <div
        className="hover:cursor-pointer"
        onClick={() => dispatch(decreaseQuantity(id))}
      >
        <img
          className="w-3.5"
          alt="minus-icon"
          src="/assets/minus-icon.png"
        ></img>
      </div>
      <p className="text-lg">{quantity}</p>
      <div
        className="hover:cursor-pointer"
        onClick={() => dispatch(increaseQuantity(id))}
      >
        <img
          className="w-3.5"
          alt="plus-icon"
          src="/assets/plus-icon.png"
        ></img>
      </div>
    </div>
  );
}
