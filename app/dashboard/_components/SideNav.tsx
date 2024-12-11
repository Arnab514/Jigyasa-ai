import { History, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: History,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: Wallet,
            path: '/dashboard/wallet'
        },
        {
            name: 'Setting',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ]

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
            <Image src={'./logo.svg'} alt = 'logo' width = {120} height = {100} />
        </div>
        <div>
            {MenuList.map((menu, index) => (
                <div key={index}>
                    <menu.icon/>
                    <h2>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

