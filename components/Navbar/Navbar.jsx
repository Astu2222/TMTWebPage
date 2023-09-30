import React from 'react'
import './Navbar.scss'
import Link from 'next/link'
import Image from 'next/image';
import {Button, ButtonGroup} from "@nextui-org/button";




const Navbar = () => {
  return (
    <div className='navbar'>


        <div className="left">

          <Link href={"/"}>  
          <Image src="/Logo/logotipo.gif" alt="" width={300} height={300} />
          </Link>
            {/* <div className="text">
              <h4 style={{color:"black"}}>Operadora Mayorista de Turismo</h4>
              <h6 style={{color:"black",fontSize:"12px"}}>EVyT Leg. 14556 / Dip. 630</h6>
            </div> */}
        </div>


        <div className="rigth">

          <div className="up">

          <span class="material-symbols-outlined">call</span>
          <p style={{fontSize:"14px"}}>+54 9 261 6347453</p>
            <h1 style={{margin:"10px 20px 10px 20px"}}>-</h1>
          <span class="material-symbols-outlined">mail</span>
          <p style={{fontSize:"14px"}} >alejandro@tmtoperadora.com.ar</p>

          

        </div>




          <div className="down">

          <Link href="hoteles">
              <div className='botonNavbar'>
                <span style={{fontSize:"30px"}} class="material-symbols-outlined">hotel</span>
                <p>Hoteles</p>
              </div>
            </Link>
           
            <Link href="paquetes">
              <div className='botonNavbar'>
                <span style={{fontSize:"30px"}} class="material-symbols-outlined">card_travel</span>
                <p>Paquetes</p>
              </div>
            </Link>

            <Link href="vuelos">
            <div className='botonNavbar'>
                <span style={{fontSize:"30px"}} class="material-symbols-outlined">flight_takeoff</span>
                <p>Vuelos</p>
              </div>
            </Link>

            <Link href="ofertas">
            <div className='botonNavbar'>
                <span style={{fontSize:"30px"}} class="material-symbols-outlined">paid</span>
                <p>Ofertas</p>
              </div>
            </Link>


            <Link href="grupales">
            <div className='botonNavbar'>
            <span style={{fontSize:"30px"}} class="material-symbols-outlined">diversity_3</span>
                <p>Grupales</p>
              </div>
            </Link>

            <Link href="circuitos">
            <div className='botonNavbar'>
                <span style={{fontSize:"30px"}} class="material-symbols-outlined">signpost</span>
                <p>Circuitos</p>
              </div>
            </Link>


          </div>
           
        </div>

    </div>
  )
}

export default Navbar