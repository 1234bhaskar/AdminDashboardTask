"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

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
import { GoDotFill } from "react-icons/go"

export const description = "An area chart with gradient fill"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "This Month",
    color: "#22c55e",
  },
  mobile: {
    label: "Last Month",
    color: "#3b82f6",
  },
} satisfies ChartConfig

export function CustomerSatisfaction() {
  return (
    <Card className="w-[30%] ">
      <CardHeader>
        <CardTitle className="text-blue-950 text-xl">Customer Satisfaction</CardTitle>
       
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
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
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1" >
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className=" flex items-center gap-2 border-t border-gray-400 mx-5 pt-3">
        <span className="">
            <span className="flex items-center gap-3">
            <span className="w-3 ">
                <span className=" relative"><GoDotFill className="text-blue-500  text-xl absolute -top-2 left-0"/>
                <div className="border-2 rounded-sm border-blue-500 w-5"></div>
                </span>
            </span>
            <p>{"Last Month"}</p>
            </span>

            <div className="pl-7">{"$3,004"}</div>
        </span>
         
         <div className="border h-5 "></div>

            <span className="">
            <span className="flex items-center gap-3">
            <span className="w-3 ">
                <span className=" relative"><GoDotFill className="text-green-500  text-xl absolute -top-2 left-0"/>
                <div className="border-2 rounded-sm border-green-500 w-5"></div>
                </span>
            </span>
            <p>{"This Month"}</p>
            </span>

            <div className="text-center" >{"$4,005"}</div>
        </span>

      </CardFooter>
    </Card>
  )
}
