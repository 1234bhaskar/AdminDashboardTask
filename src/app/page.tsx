import Image from "next/image";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import TodaySale from "./Components/TodaySale";
import {VisitorInsights} from "./Components/VisitorInsights";
import { TotalRevenue } from "./Components/TotalRevenue";
import { CustomerSatisfaction } from "./Components/CustomerSatisFaction";
import { TargetVsReality } from "./Components/TargetVsReality";
import { TopProductsTable } from "./Components/TopProductsTable";
import { VolumeVsService } from "./Components/VolumeVsService";


export default function Home() {


  return (
    <div className="w-full flex">
    <div className="w-1/5">
      <SideBar/>
    </div>
    <div className="w-4/5 bg-gray-100 h-screen">

      {/* NavBar */}
      <div className="px-5 h-[10%]">
        <NavBar/>
      </div>

      {/* Content */}

      <div className="h-[90%] overflow-y-scroll">
        <div className="flex px-5 mt-5 gap-5 h-60 ">
        {/* Today's Sale */}
            <TodaySale/>

            {/* Visistor Insights */}
            <VisitorInsights />
      </div>

      <div className="flex gap-2 px-5 mt-6  w-full ">
           <TotalRevenue />
           <CustomerSatisfaction/>
           <TargetVsReality/>

      </div>

      {/* 3rd Row */}
      <div className=" flex mt-5 justify-between px-5 gap-2" >
          <TopProductsTable/>
          <VolumeVsService/>
      </div>
      </div>

    </div>
    </div>
  );
}
