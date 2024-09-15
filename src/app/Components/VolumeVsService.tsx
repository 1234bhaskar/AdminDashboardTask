
"use client"

import { Bar, BarChart, XAxis } from "recharts"

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

export const description = "A stacked bar chart with a legend"

const chartData = [
  { date: "2024-07-15", running: 450, swimming: 300 },
  { date: "2024-07-16", running: 380, swimming: 420 },
  { date: "2024-07-17", running: 520, swimming: 120 },
  { date: "2024-07-18", running: 140, swimming: 550 },
  { date: "2024-07-19", running: 600, swimming: 350 },
  { date: "2024-07-20", running: 480, swimming: 400 },
]

const chartConfig = {
  running: {
    label: "Running",
    color: "hsl(var(--chart-1))",
  },
  swimming: {
    label: "Swimming",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function VolumeVsService() {
  return (
    <Card className="w-[30%]">
      <CardHeader>
        <CardTitle className="font-bold text-blue-950">Volume vs Service Level</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            
            <Bar
              dataKey="running"
              stackId="a"
              fill="#8FD14F"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="#00CCDD"
              radius={[4, 4, 0, 0]}
            />
            
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" flex items-center gap-2 border-t border-gray-400 mx-5 justify-center pt-2">
        <span>
            <span className="flex items-center gap-3">
            <span className="w-3 ">
                {/* <span className=" relative"><GoDotFill className="text-blue-500  text-xl absolute -top-2 left-0"/>
                </span> */}
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            </span>
            <p>{"Volume"}</p>
            </span>
             
            <div className="pl-7">{"1135"}</div>
            </span>
       
         
         <div className="border h-5 "></div>

            <span className="">
            <span className="flex items-center gap-3">
            <span className="w-3 ">
                {/* <span className=" relative"><GoDotFill className="text-green-500  text-xl absolute -top-2 left-0"/>
                </span> */}
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                {/* <div className=" h-4 w-4rounded-full border-green-500 "></div> */}
            </span>
            <p>{"ServiceS"}</p>
            </span>

            <div className="text-center" >{"636"}</div>
            </span>

      </CardFooter>
    </Card>
  )
}
