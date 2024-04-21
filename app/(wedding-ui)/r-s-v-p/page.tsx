import React from 'react'
import ReservationForm from '../home/reservation-form'
import Navbar from '../home/navbar'

const Reservation = () => {
  return (
    <section className='relative' >
      <div className="absolute top-6 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="h-20 bg-light-secondary flex flex-col text-center justify-center items-center"></div>
      <ReservationForm/>
    </section>
  )
}

export default Reservation