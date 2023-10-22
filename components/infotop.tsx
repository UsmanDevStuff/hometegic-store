import React from "react";
import Currency from "./ui/currency";
import { Product } from "@/types";

interface InfoButtonProps {
  data: Product;
}

const InfoTop: React.FC<InfoButtonProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default InfoTop;
