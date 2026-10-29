"use client";

import { useState } from "react";
import Link from "next/link";

export default function ShopList ({ data }){

    const [keyword,setKeyword] = useState("");

    const filterShops = data.filter(
        (item) => {
            const searchText = keyword.toLowerCase();
            return item.title.toLowerCase().includes(searchText)
            
        }
    );
     const isActive = (act: boolean) => {
        if (act) 
            return <span style={{ color: "green" }}>OPEN</span>;
        return <span style={{ color: "red" }}>CLOSE</span>;
    };
    return (
        <div className="max-w-3sl ma-auto p-6">
            <div>
                
            </div>
        {/* Search */}
        <div className="mb-6">
            
        <input
          type="text"
          value={keyword}
          onChange={(e) =>
            setKeyword(e.target.value)
          }
          placeholder="Search shop..."
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>

            <div className="mb-4 text-gray-600">
                We Have {filterShops.length} Shop Open Now
            </div>
            <div className="flex justify-between items-center">
        <Link href="../MyPetList"
            className="bg-green-600 text-white px-4 py-2 rounded-lg">
            Add NEW PET HERE!!
        </Link>
        
        <div>
            
        </div>
            </div>
            <div className="space-y-4">
                 {
                        filterShops.map(shops => (
                            <div key={shops.id} className="border rounded-lg p-4">
                                <h2 className="text-xl font-semibold">
                                    {shops.title}
                                </h2>
                                <p>Shop IS  {isActive(shops.openStatus)}</p>
                                <Link 
                                href = {`/MyPetForm/${shops.id}`}
                                className="inline-block mt-3 bg-blue-600 text-white px4 py-2 rounded"
                                >
                                PET HERE
                                </Link>
                                <Link href=""
            className="bg-red-600 text-white px-4 py-2 rounded-lg">
            DELETE!
        </Link>
                            </div>
                        
                        ))
                        
                 }
            </div>

        </div>
    
    
    );
        
    
}