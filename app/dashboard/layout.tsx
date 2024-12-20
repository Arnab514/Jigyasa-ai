import SideNav from './_components/SideNav' ;
import React from 'react'

export default function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <div className='md:w-64 hidden md:block fixed'>
        <SideNav/>
      </div>
      <div className='md:ml-64'>
        {children}
      </div>
    </div>
  )
}
