"use client";

import { ShoppingBag } from "lucide-react";
import { CarIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  //gap-x-3 outer div
  return (
    <div className="ml-auto flex items-center">
      <Button
        onClick={() => router.push("/track-order")}
        className="flex items-center rounded-lg bg-black px-[10px] py-[6px] mx-1"
      >
        <CarIcon size={20} color="white" />
      </Button>
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-lg bg-black px-[10px] py-[6px] mx-1"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
