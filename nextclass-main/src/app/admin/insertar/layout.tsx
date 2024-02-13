import { IChildren } from '@/interfaces/iChildren'
import React from 'react'

export default function Insertlayout({children}: IChildren){
  return (
    <main>
        { children }
    </main>
  )
}