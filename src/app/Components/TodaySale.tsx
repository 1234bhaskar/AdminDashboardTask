import React from 'react'
import { DollarSign, File, SignalHigh, Tag, TagIcon, Tags, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { title } from "process";
import { MdPersonAddAlt1 } from "react-icons/md";

export default function TodaySale() {
     const Sales=[{
     id:1,
     logo:<SignalHigh/>,
     title:"$1K",
     subtitle:"Total Sales",
     desc:"+8% from yesterday",
     logoBgColor:"bg-red-500",
     color:"bg-red-200"
  },{
    id:2,
     logo:<File/>,
     title:"300",
     subtitle:"Total Order",
     desc:"+5% from yesterday",
     logoBgColor:"bg-orange-500",
     color:"bg-orange-200"
  },{
    id:3,
     logo:<Tag/>,
     title:"300",
     subtitle:"Product Sold",
     desc:"+1.2% from yesterday",
     logoBgColor:"bg-green-500",
     color:"bg-green-200"
  },{
    id:4,
     logo:<MdPersonAddAlt1/>,
     title:"5",
     subtitle:"New Customers",
     desc:"+0.55% from yesterday",
     logoBgColor:"bg-purple-500 p-3",
     color:"bg-purple-200"
  }
]
  return (
    
        <div className="border w-[55%] rounded-md bg-white p-3 h-full">
                  <div className="w-full  flex justify-between  text-blue-950">
                    <span>
                      <h1 className="font-bold">Today's Sale</h1>
                      <p>Sale Summuary</p>
                    </span>

                    <button className="border border-green-600  px-2 flex items-center text-xs rounded-sm gap-2 text-green-900">
                      <span className=" "><Upload width={10}/></span>
                      <span className="font-bold">Export</span>
                    </button>
                  </div>
            

            <div className="w-full flex justify-between pt-2">
              {
                Sales.map((card)=>{
                   return(
                    <Card key={card.id} x-chunk="dashboard-01-chunk-0" className={`${card.color} w-1/5 pl-3 p-2 `}>
              <span >
                <div className={`w-fit p-2 rounded-full text-white ${card.logoBgColor}`}>
                 {card.logo} 
                </div>
                  
                 {/* className="p-2 bg-red-500  rounded-full text-white " */}
              </span>
            
              <div className="flex text-black font-bold">
                <p>{card.title}</p>
              </div>
            
              <CardTitle className="text-sm  ">
                <p>{card.subtitle}</p>
                <p className="text-blue-500 text-[10px] ">{card.desc}</p>
              </CardTitle>
          </Card>
                   )
                })
              }
            </div>

            </div>
  )
}
