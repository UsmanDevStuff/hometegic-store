import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import InputForm from "./components/InputForm";
import { Card } from "@/components/ui/card";
import getOrders from "@/actions/get-orders";

export const revalidate = 0;

const TrackOrderPage = async () => {
  const orders = await getOrders();
  const billboard = await getBillboard("272e03a8-27f6-45a5-ac53-5624743f7842");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <InputForm data={orders} />
        </div>
      </div>
    </Container>
  );
};

export default TrackOrderPage;
