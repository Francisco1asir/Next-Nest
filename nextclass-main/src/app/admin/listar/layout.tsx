import { IChildren } from '@/interfaces/iChildren'
import React from 'react'

export default function Listarlayout({children}: IChildren){
  return (
    <main>
        { children }
    </main>
  )
}