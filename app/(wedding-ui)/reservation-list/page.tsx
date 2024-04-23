import React from "react";
import ReservationForm from "../home/reservation-form";
import { fetchData } from "@/app/lib/data";
import { Status } from "@prisma/client";
import { cinzel } from "@/app/fonts";



const ReservationList = async () => {
  const data = await fetchData();
  let number = 0;
  return (
    <div className="overflow-x-auto ">
      <div className={`${cinzel.className} w-full items-center text-center bg-light-primary text-white text-5xl py-4 justify-center`}><p>Reservation List </p></div>
      <table className="table table-zebra">
        {/* head */}
        <thead className="text-2xl">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Comming Ceremony</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {
          data.map((item) => {
            number ++;
            return (
              <tr key={item.Id}>
                <td key={item.Id}>{number}</td>
                <td key={item.Id}>{item.Name}</td>
                <td key={item.Id}>{item.Email}</td>
                <td key={item.Id}>{item.Status}</td>
                <td key={item.Id}>{item.Message}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
