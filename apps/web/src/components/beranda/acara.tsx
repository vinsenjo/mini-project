'use client'
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "./card"

export default function Acara() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <section className="bg-[#e1e1e1] min-h-screen px-7 pt-4 ">

            {/* location */}
            <div className="px-10 flex gap-7 ">
                <select className="select select-accent w-[150px] max-w-xs h-10 rounded-md p-1">
                    <option disabled selected>City</option>
                    <option>Bandung</option>
                    <option>Surabaya</option>
                    <option>Bali</option>
                </select>
                <DatePicker className=" w-[150px] max-w-xs h-10 rounded-md p-2" selected={startDate} onChange={(date) => setStartDate(date!)} />
            </div>
          
            <Card />
        </section>
    )
}