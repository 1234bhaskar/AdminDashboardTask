"use client"

import { TrendingUp, Weight } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { title } from "process"
import { BsShopWindow } from "react-icons/bs"

export const description = "A multiple bar chart"

const chartData = [
  { month: "January", reality: 186, target: 80 },
  { month: "February", reality: 305, target: 200 },
  { month: "March", reality: 237, target: 120 },
  { month: "April", reality: 73, target: 190 },
  { month: "May", reality: 209, target: 130 },
  { month: "June", reality: 214, target: 140 },
]

const chartConfig = {
  reality: {
    label: "Reality",
    color: "#117554",
  },
  target: {
    label: "Target",
    color: "#FFEB00",
  },
} satisfies ChartConfig

const targetVsReality=[
    {
    icon:<Weight/>,
    title:"Reality Sales",
    desc:"Global",
    stats:8.823,
    color:"green-500",
    bg:"green-300",
},
{
    
    icon:<BsShopWindow/>,
    title:"Target Sales",
    desc:"Commercial",
    stats:12.122,
    color:"orange-400",
     bg:"orange-200",
}
]

export function TargetVsReality() {
  return (
    <Card className="w-[30%] ">
      <CardHeader>
        <CardTitle className="text-blue-950 text-xl">Target vs Reality</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className=" ">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="reality" fill="var(--color-reality)" radius={4} />
            <Bar dataKey="target" fill="var(--color-target)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter  className="flex flex-col gap-2 p-0  text-sm">
       {
        targetVsReality.map((t)=>{
            return(
                <div key={t.stats} className="flex w-full  px-2 ">
                <div className="flex w-[60%] gap-2 items-center">
                <div className={`bg-${t.bg} text-${t.color} w-[20%] flex justify-center items-center rounded-md h-8 p-2` }>{t.icon}</div>
                <div className="flex flex-col text-blue-950">
                <span className="font-bold">{t.title}</span>
                <span>{t.desc}</span>
                </div>
                    </div>
                <div className="font-bold">
                <p className={`text-${t.color}`}>{t.stats}</p>
                </div>
                </div>
            )
        })
       }
      </CardFooter>
    </Card>
  )
}
