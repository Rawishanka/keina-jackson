import React from "react";
import ReservationForm from "../home/reservation-form";
import { fetchData } from "@/app/lib/data";
import { Status } from "@prisma/client";
import { cinzel } from "@/app/fonts";
import { ReservationListData } from "@/app/lib/definition";



const ReservationList = async () => {
  const data = await fetchData();
  let number = 0;
  let numberOfGuests = 0;
  return (
    <div className="overflow-x-auto ">
      <div className={`${cinzel.className} w-full items-center text-center bg-light-primary text-white text-5xl py-4 justify-center`}><p>Reservation List </p></div>
      <table className="table table-zebra">
        {/* head */}
        <thead className="text-2xl">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Phone</th>
            <th>Comming Ceremony</th>
            <th>Guests</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {
          data.map((item) => {
            number ++;
            numberOfGuests += item.Guests;
            return (
              <tr key={item.Id}>
                <td key={item.Id}>{number}</td>
                <td key={item.Id}>{item.Name}</td>
                <td key={item.Id}>{item.Phone}</td>
                <td key={item.Id}>{item.Status}</td>
                <td key={item.Id}>{item.Guests}</td>
                <td key={item.Id}>{item.Message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={`${cinzel.className} flex justify-center items-center text-3xl py-5`}>
          Total Guests :- {numberOfGuests}
      </div>
    </div>
  );
};

export default ReservationList;
