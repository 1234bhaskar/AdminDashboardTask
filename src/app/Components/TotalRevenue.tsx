"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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


const chartData = [
  { month: "Monday", desktop: 186, mobile: 80 },
  { month: "Tuesday", desktop: 305, mobile: 200 },
  { month: "Wednesday", desktop: 237, mobile: 120 },
  { month: "Thursday", desktop: 73, mobile: 190 },
  { month: "Friday", desktop: 209, mobile: 130 },
  { month: "Saturday", desktop: 214, mobile: 140 },
  { month: "Sunday", desktop: 250, mobile: 120 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function TotalRevenue() {
  return (
    <Card className="w-[40%] ">
      <CardHeader>
        <CardTitle className="text-blue-950 text-xl">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent className=" p-0 flex justify-center">
        <ChartContainer config={chartConfig} className=" mr-4  w-[75%]">
          <BarChart  accessibilityLayer data={chartData} className="">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
            //label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
            tickMargin={10}
            tickLine={false}
            axisLine={false}

          />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 text-sm"> 
        <span className="flex  items-center px-2 gap-2">
            <span className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#e76e50]"></div>
            <span>Online Sales</span>
        </span>
        <span className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#2a9d90]"></div>
            <span>Offline Sales</span>
        </span>
        </span>
      </CardFooter>
    </Card>
  )
}
