import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from "next/link"
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

import image from "./logo.png"
export default function SideBar() {
  return (
    <div className='flex  flex-col  h-screen'>
        <div className="flex h-full max-h-screen flex-col  gap-2  bg-gray-100">
        <div className="flex h-14 items-center justify-center  px-4 lg:h-[60px] lg:px-6 bg-gray-100">
          
                            <Image src={image} alt="logo" width={150} height={10}/>

           
          </div>

          <div className="flex-1 bg-gray-100">
            <nav className="grid justify-center items-center  text-sm font-medium  mt-5  gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white hover:bg-[#6256CA] "
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all  hover:text-white hover:bg-[#6256CA]"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge> */}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg  px-3 py-2  transition-all hover:text-white hover:bg-[#6256CA]"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white hover:bg-[#6256CA]"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-white hover:bg-[#6256CA]"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          
          </div>

          <div className="mt-auto p-14 bg-gray-100 ">
            <Card x-chunk="dashboard-02-chunk-0 bg-[#6256CA]">
              <CardHeader className="p-2 pt-0 md:p-4 bg-[#6256CA] text-white text-center rounded-t-md">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription className='text-white'>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 bg-[#6256CA] pt-0 md:p-4 md:pt-0 rounded-b-md">
                <Button size="sm" className="w-full bg-white text-[#6256CA]">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
            </div>


          
    </div>
  )
}
