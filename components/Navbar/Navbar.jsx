import React from 'react'
import './Navbar.scss'
import Link from 'next/link'
import {Button, ButtonGroup} from "@nextui-org/button";

const Navbar = () => {
  return (
    <div className='navbar'>


        <div className="left">

            <img src="./Logo/logo.jpg" alt="" />

        </div>


        <div className="rigth">

            <Link href="hoteles">
            <Button>Hoteles</Button>
            </Link>
           
            <Link href="hoteles">
            <Button>Paquetes</Button>
            </Link>

            <Link href="hoteles">
            <Button>Vuelos</Button>
            </Link>

            <Link href="hoteles">
            <Button>Ofertas</Button>
            </Link>


            <Link href="hoteles">
            <Button>Grupales</Button>
            </Link>

            <Link href="hoteles">
            <Button>Circuitos</Button>
            </Link>

        </div>

    </div>
  )
}

export default Navbar