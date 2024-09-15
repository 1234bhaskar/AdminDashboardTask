"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"


const ProductArray=[
    {
        id:"01",
        name:"Home Decore Range",
        value:45,
        color:"blue-500",
        bgColor:"cyan-00",
        tColor:"blue"
    },
    {
        id:"02",
        name:"Disney Princess Pink Bag 1B",
        value:29,
        color:"green-500",
        bgColor:"green-300",
        tColor:"green"
    },
    {
        id:"03",
        name:"Bathroom Essentials",
        value:18,
        color:"purple-600",
        bgColor:`purple-300`,
        tColor:"purple"


    }
]
export const TopProductsTable=()=>{
return(
  <div className="w-[40%]  rounded-lg bg-white p-3 ">
    <div>
      <h1 className="font-bold text-blue-950">Top Products</h1>
    </div>
    <Table >
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">#</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Popularity</TableHead>
      <TableHead className="text-right">Sales</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    {
        ProductArray.map((p)=>{
            return(
                <TableRow className="table-fixed">
                <TableCell className="font-medium">{p.id}</TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>
                {/* Progress bar */}
                <Progress value={p.value}  className={`bg-${p.bgColor}`}  />
                </TableCell>
                <TableCell className=""><div className={` flex justify-center  border-2  border-${p.color} bg-${p.bgColor}  text-${p.color}`} >{p.value}%</div></TableCell>
                </TableRow>
            )
        })
    }
  </TableBody>
</Table>
  </div>
)
}
