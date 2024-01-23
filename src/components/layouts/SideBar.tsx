"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useSideBar } from "@/zustand/useSideBar";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@components/ui-shadcn-custom/table-custom";
import Sale from "@app/(main)/cart/Sale";
import QuantityButton from "@app/(main)/cart/QuantityButton";
import formatCurrencyWithCommas from "@/utils/formatCurrency";

import { useCartStore } from "@zustand/useCartStore";
import { type CartItem } from "@app/(main)/cart/interface";

const SideBar = () => {
  const router = useRouter();

  const { isOpenSideBar, hideSideBar } = useSideBar() as {
    isOpenSideBar: boolean;
    hideSideBar: () => void;
  };

  const { cartList: data, totalPrice } = useCartStore() as {
    cartList: CartItem[];
    totalPrice: number;
  };

  return (
    <div className="relative flex flex-col">
      <AnimatePresence>
        {isOpenSideBar && (
          <>
            <motion.div
              key="Sider Bar Backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-screen h-screen backdrop-blur-sm opacit top-0 left-0 absolute z-40"
              onClick={() => {
                hideSideBar();
              }}
            ></motion.div>
            <motion.div
              key="Sider Bar"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: isOpenSideBar ? 0 : 100, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute opacity-100 filter h-[96vh] xl:h-[90vh] sm:h-[86vh] min-w-[24vw] sm:max-w-[94vw] right-0 z-50 my-[2vh] xl:my-[5vh] sm:my-[7vh] py-10 sm:py-6 pl-2 pr-8 bg-black rounded-l-[26%]"
            >
              <div className="w-full h-full flex flex-row gap-2">
                <div className="w-10 h-full flex justify-center items-center">
                  <button
                    onClick={() => {
                      hideSideBar();
                    }}
                  >
                    <Image
                      alt="Close"
                      src="/assets/icons/yellow-close-icon.png"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <div className="w-full h-full overflow-hidden">
                  <h1 className="w-full h-8 text-center text-primary text-2xl font-semibold">
                    Your Cart
                  </h1>
                  <div className="w-full h-[94%] overflow-hidden flex flex-col justify-between">
                    <SideBarTable cartList={data} totalPrice={totalPrice} />
                    <div className="w-full flex flex-row justify-center items-center">
                      <button
                        onClick={() => {
                          router.push("/cart");
                          hideSideBar();
                        }}
                        className="w-24 h-8 border  text-sm rounded-xl text-primary"
                      >
                        Go to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideBar;

const SideBarTable = ({
  cartList,
  totalPrice,
}: {
  cartList: CartItem[];
  totalPrice: number;
}) => {
  return (
    <div className="overflow-auto">
      {totalPrice > 0 ? (
        <Table className="h-fit mx-auto">
          <TableHeader className="h-16">
            <TableRow>
              <TableHead className="w-36 text-white text-base text-left sm:text-center">
                Name
              </TableHead>

              <TableHead className="text-white text-center text-base xl:hidden">
                Number
              </TableHead>
              <TableHead className="w-fit text-white text-center text-base">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cartList.map((line) => (
              <TableRow key={line.id}>
                <TableCell className="text-base text-white leading-10 overflow-hidden">
                  <div className="w-36 sm:w-20 break-words line-clamp-3 sm:line-clamp-4 leading-6">
                    {line.name}
                  </div>
                  {line.sale ? (
                    <div className="sm:hidden xl:font-light">
                      <Sale saleProps={line.sale} />
                    </div>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell className="max-w-10 text-white text-base xl:hidden">
                  <QuantityButton id={line.id} isSideBar={true} />
                </TableCell>
                <TableCell className="text-center text-white text-base">
                  {line.sale && (
                    <div className="hidden sm:flex justify-end">
                      <Sale saleProps={line.sale} />
                    </div>
                  )}
                  <div className="sm:mt-1">
                    {formatCurrencyWithCommas(line.price)}.000
                  </div>
                  <div className="hidden xl:block">
                    <QuantityButton id={line.id} isSideBar={true} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="h-16 text-white border-t border-t-primary">
            <TableRow className="text-base">
              <TableCell>Total Price</TableCell>
              <TableCell className="xl:hidden"></TableCell>
              <TableCell className="text-center">
                {totalPrice > 0 && (
                  <div className="w-full">
                    {formatCurrencyWithCommas(totalPrice)}.000
                  </div>
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <div className="h-16 text-primary flex justify-center items-center">
          No selected item
        </div>
      )}
    </div>
  );
};
