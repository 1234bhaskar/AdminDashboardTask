"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

export const description = "A multiple line chart"

 const chartData = [
   { month: "January", Loyal : 186, New: 80 ,Unique:70},
   { month: "February", Loyal : 305, New: 200 ,Unique:80 },
   { month: "March", Loyal: 237, New: 120 ,Unique:40},
   { month: "April", Loyal: 73, New: 190 , Unique:60},
   { month: "May", Loyal: 209, New: 130,Unique:50 },
   { month: "June", Loyal: 214, New: 140,Unique:60 },
 ]


const chartConfig = {
  loyal: {
    label: "loyal",
    color: "hsl(var(--chart-1))",
  },
  new: {
    label: "new",
    color: "hsl(var(--chart-2))",
  },
  unique: {
    label: "unique",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function VisitorInsights() {
  return (
    <div className="w-[40%]">
      <h1 className="text-xl text-blue-950 font-bold">Visitor Insights</h1>
      <Card className=" h-full bg-gray-100 shadow-none border-none ">
      <CardHeader>
      </CardHeader>
      <CardContent className="-mt-10  pb-0">
        <ChartContainer config={chartConfig} className="w-[75%] ">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis 
            // label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
            axisLine={false}
            tickLine={false}
            tickMargin={1}
            //tickFormatter={(value) => `$${value}`}
          />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="Loyal"
              type="monotone"
              stroke="var(--color-loyal)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="New"
              type="monotone"
              stroke="var(--color-new)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Unique"
              type="monotone"
              stroke="var(--color-unique)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      
      <CardFooter  className="">
        <div className="flex  items-center justify-center text-xs mb-5 ">
        <span className="flex  items-center px-2 gap-2">
            <span className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#e76e50]"></div>
            <span>Loyal Customers</span>
        </span>
        <span className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#2a9d90]"></div>
            <span>New Customers</span>
        </span>
        <span className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#425e69]"></div>
            <span>Unique Customers</span>
        </span>
        </span>
      </div>
      </CardFooter>
      
    </Card>
    </div>
  )
}
