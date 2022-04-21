import React from 'react'
import { CardWidget } from './CardWidget'

export const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">Agustin</a>
      </div>
       <CardWidget/>
    </div>
  )
}


