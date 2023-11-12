import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, X } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

const ShoppingCartModal = () => {
  const { cartDetails, removeItem, totalPrice } = useShoppingCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="h-[3rem] w-[3rem]">
          <ShoppingBasket className="h-[3rem] w-[3rem] light:invert" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="flex flex-col justify-center">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full justify-between">
          <ul className="-my-6 divide-y divide-gray-200">
            {Object.values(cartDetails ?? {}).map((entry) => (
              <li
                key={entry.id}
                className="flex py-6 overflow-hidden rounded-md border border-gray-200"
              >
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={entry.image as string}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-200">
                      <h3>{entry.name}</h3>
                      <p>{entry.price} Kr</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-200">Stykk: {entry.quantity}</p>
                    </div>
                      <X onClick={() => removeItem(entry.id)}/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-200">
            <p>Total: {totalPrice} Kr</p>
          </div>
        </div>
        <Button>Kjøp</Button>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
