import Link from "next/link";
import { shops } from "../components/shopitem";
import Loading from "../components/Loading";
import { Suspense } from "react";

export default async function  ShopDetail({params}) {
    
    const {id} = await params;

    const shop = shops.find(
        item => item.id === Number(id)
    );
      const isActive = (act: boolean) => {
        if (act) 
            return <span style={{ color: "green" }}>OPEN</span>;
        return <span style={{ color: "red" }}>CLOSE</span>;
    };
    return(
        <>
        <Suspense fallback={<Loading />}>
         Shop ID: {id}<div className="w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold">
        PET SHOP DETAIL
      </h1>

      <div
        key= {shop.id}
        className="border rounded-lg p-4 m-4"
      >
        <p className="mt-4 font-semibold">
          ID:{shop.id}
        </p>
        <p className="my-4">
          Title:{shop.title}
        </p>
        <p className="my-4">
          Status:{isActive(shop.openStatus)}
        </p>
      </div>

      <Link
        href="/MyPetForm"
        className="bg-gray-600 text-white px-4 py-2 rounded"
      >Back</Link>

    </div>
        </Suspense>
       
        
        </>
    );
    
}