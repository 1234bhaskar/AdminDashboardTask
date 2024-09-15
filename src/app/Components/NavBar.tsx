import React from 'react'
import { Bell, ChevronDown, Search, User } from 'lucide-react'
import Image from 'next/image'
import country from "./country.png"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"


export default function NavBar() {
  return (
    <nav className=' flex w-full   justify-between  px-5 py-2 items-center text-blue-950'>
        <h1 className='font-bold text-blue-950 text-3xl'>DashBoard</h1>
        <div className=' flex gap-2 px-5  rounded-md py-2 bg-gray-200'><span className=' text-purple-600'><Search/></span> <input className='bg-gray-200 outline-none'   type="text"  placeholder='Search here...'/></div>
        {/* <div className='flex gap-5'>
            <span className='flex'>
            <Image src={country} alt='country' height={10} width={20}/>
            <span>Eng(US)</span>
            </span>
             <span >
                <ChevronDown/>
             </span>
        </div> */}

        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <div className='flex gap-5'>
            <span className='flex'>
            <Image src={country} alt='country' height={10} width={20}/>
            <span>Eng(US)</span>
            </span>
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent className='flex flex-col'>
        <NavigationMenuLink>Hindi(IND)</NavigationMenuLink>
        <NavigationMenuLink>Spanish(ESP)</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

        <div className='flex gap-2'>
            <button>
            <span className='text-orange-400 w-10 '>
            <div className='bg-orange-200 p-2 rounded-md relative'>
                <div className='bg-red-500 w-2 h-2 rounded-md absolute right-1 top-1'></div>
            <Bell/>
            </div>
            </span>
        </button>


        {/* <div className='flex gap-4'>
            <div><User/></div>
            <div className='flex flex-col'>
                <span className='font-bold'>Musfiq</span>
                <span>Admin</span>
            </div>
            <div>
                <ChevronDown/>
            </div>
        </div> */}

 <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <div className='flex gap-4 items-center'>
            <div><User/></div>
            <div className='flex flex-col'>
                <span className='font-bold'>Musfiq</span>
                <span>Admin</span>
            </div>
            
        </div>
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Hello this is Mushfiq</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        </div>
    </nav>
  )
}
