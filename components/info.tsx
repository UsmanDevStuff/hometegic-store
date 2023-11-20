"use client";

import { ShoppingCart, CreditCard } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import axios from "axios";

declare global {
  interface Window {
    fbq: any;
  }
}

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const items = [{ id: data?.id }];

  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);

    window.fbq("track", "AddToCart", { currency: "USD" });
  };

  const buyNow = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.fbq("track", "Purchase", { currency: "USD", value: 30 });

    window.location = response.data.url;
  };

  return (
    <>
      <div>
        {/* <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-2xl text-gray-900">
            <Currency value={data?.price} />
          </p>
        </div>
        <hr className="my-4" /> */}
        <div className="flex flex-col gap-y-3">
          {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data?.size?.value}
          </div>
        </div> */}
          {/* <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div> */}
          <div className="flex flex-wrap items-center gap-x-3">
            <Button
              onClick={buyNow}
              className="flex items-center gap-x-2 mb-2 mx-2"
            >
              Buy Now
              <CreditCard size={20} />
            </Button>
            <Button
              onClick={onAddToCart}
              className="flex items-center gap-x-2 mb-2 mx-2"
            >
              Add To Cart
              <ShoppingCart size={20} />
            </Button>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold">Details:</h1>
          <p>{data?.details?.value}</p>
        </div>
        {/* <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div> */}
      </div>
    </>
  );
};

export default Info;
