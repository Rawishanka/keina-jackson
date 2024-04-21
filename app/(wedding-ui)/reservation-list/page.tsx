import React from "react";
import ReservationForm from "../home/reservation-form";
import { fetchData } from "@/app/lib/data";

const ReservationList = async () => {
  const data = await fetchData();
  return (
    <div className="overflow-x-auto ">
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
          {data.map((item) => {
            return (
              <tr key={item.Id}>
                <th key={item.Id}>{item.Id}</th>
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
