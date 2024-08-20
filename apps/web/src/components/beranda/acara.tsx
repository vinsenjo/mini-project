'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pagination from './pagination';

export default function Acara() {
  const [startDate, setStartDate] = useState(new Date());
  const [select, setSelect] = useState('option 1');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value);
  };

  return (
    <section className="bg-[#e1e1e1] px-7 pt-4  ">
      <div className="px-10 flex gap-7 text-black rounded-lg ">
        <select
          className="rounded-md bg-white w-[150px]"
          value={select}
          onChange={handleChange}
        >
          <option value="option1">City</option>
          <option value="option2">Bandung</option>
          <option value="option3">Surabaya</option>
          <option value="option3">Bali</option>
        </select>

        <DatePicker
          className=" w-[150px]  bg-white max-w-xs h-10 rounded-md p-2"
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
        />
      </div>

      {/* <Card /> */}
   
    </section>
  );
}
