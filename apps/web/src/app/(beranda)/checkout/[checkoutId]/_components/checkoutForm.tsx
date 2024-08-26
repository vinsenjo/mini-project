'use client';
import { IEvent } from '@/types/event';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import CardPrice from './cardPrice';
import Cookies from 'js-cookie';
import { setTransaction } from '@/libs/actions/user';
import { navigate } from '@/libs/actions/server';
import { toast } from 'react-toastify';

export default function CheckoutForm() {
  const [data, setData] = useState<IEvent>();
  const [dataUser, setDataUser]: any = useState();
  const [amount, setAmount] = useState<number>(0);
  const [usePoint, setUsePoint] = useState(0);
  const params = useParams();
  const id = +params.checkoutId;
  const type = data?.ticketType.toUpperCase();
  const seats = data?.seats || 0;
  const totalSeats = seats - amount;
  const token = Cookies.get('token');
  const displayPoint = dataUser?.point >= 0 ? dataUser.point : 0;

  //fetch data user
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/api/user/profile`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setDataUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  //fetch data event
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/api/event/${id}`,
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const dataFree = {
    price: 0,
    quantity: amount,
    finalPrice: 0,
    totalDiscount: 0,
    eventId: data?.id,
    usePoint: 0,
  };

  const postDataFree = async () => {
    try {
      await axios.post(`http://localhost:8000/api/transaction/free`, dataFree, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      toast.success('success booking ticket'), navigate('/');
    } catch (error) {
      console.error('Error Message:', error);
    }
  };
  let finalPrice = data?.price! * amount;
  const dataPaid = {
    price: data?.price,
    quantity: amount,
    finalPrice: finalPrice,
    totalDiscount: 0,
    eventId: data?.id,
    usePoint: usePoint,
  };

  const postDataPaid = async () => {
    try {
      await axios.post(`http://localhost:8000/api/transaction/`, dataPaid, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      toast.success('transaction created'), navigate('/');
    } catch (error) {
      console.error('Error Message:', error);
    }
  };

  const handlePoint = () => {
    setUsePoint(displayPoint);
  };
  const handleDecrement = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };
  const handleIncrement = () => {
    if (amount < seats) {
      setAmount(amount + 1);
    }
  };
  return (
    <div className="px-5 py-10 flex flex-col lg:flex-row gap-2 ">
      <div>
        <CardPrice
          type={type!}
          img={data?.image!}
          title={data?.name!}
          price={data?.price!}
          point={dataUser?.point}
          seat={totalSeats}
          setPoint={handlePoint}
        />
      </div>

      <div
        className={`${data?.ticketType == 'free' ? 'block' : 'hidden'} card border-2 w-full shadow-xl bg-white text-black px-10`}
      >
        <div className="card-body">
          <h2 className="card-title text-4xl self-center mb-5">
            Checkout Your Ticket Here!
          </h2>
          <div className="flex text-2xl">
            <p>Ticket amount:</p>
            <div className="flex gap-4">
              <button onClick={handleDecrement}>-</button>
              <p className="border-2 px-2">{amount}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={postDataFree}
              className="btn btn-primary bg-[#32bc9b] hover:bg-[#FF7B4F]"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${data?.ticketType == 'paid' ? 'block' : 'hidden'} card border-2 w-full shadow-xl bg-white text-black px-10`}
      >
        <div className="card-body">
          <h2 className="card-title text-4xl self-center mb-5">
            Checkout Your Ticket Here!
          </h2>
          <div className="flex text-2xl">
            <p>Ticket amount:</p>
            <div className="flex gap-4">
              <button onClick={handleDecrement}>-</button>
              <p className="border-2 px-2">{amount}</p>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div className="flex text-2xl">
            <p>Point Used:</p>
            <div className="flex gap-4">
              <p className=" px-2">{usePoint}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button
              onClick={postDataPaid}
              className="btn btn-primary bg-[#32bc9b] hover:bg-[#FF7B4F]"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
