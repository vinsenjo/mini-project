'use client';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImagePreview from '../createEvent/imgPriview';
import { useRef } from 'react';
import Category from '../beranda/category';
import { createEventFree } from '@/libs/actions/event';

const validationSchemas = Yup.object({
  image: Yup.mixed().required('please enter your img'),
  nameEvent: Yup.string().required('please enter your name event'),
  date: Yup.date().required('please enter your date event'),
  time: Yup.string().required('please enter time event'),
  seat: Yup.number().required('please enter seat'),
  Category: Yup.string().required('please enter category your event'),
  select: Yup.string().required('please enter your category'),
  location: Yup.string().required('please enter your location'),
  price: Yup.number().required('please enter price your event'),
  description: Yup.string().required('please description event'),
});

export interface validationSchema {
  image: File | null;
  name: string;
  date: Date;
  seats: string;
  category: string;
  select: string;
  location: string;
  price: string;
  description: string;
}

export default function ModalPaid() {
  const initialValues: validationSchema = {
    image: null,
    name: '',
    date: new Date(),
    seats: '',
    category: '',
    select: '',
    location: '',
    price: '',
    description: '',
  };
  const mediaRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = (event: any, setFieldValue: any) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue('image', file);
    }
  };

  return (
    <section>
      <button
        className="btn w-48 bg-black text-white hover:border-[#FF7B4F] hover:bg-[#FF7B4F] text-xl"
        onClick={() =>
          (document.getElementById('my_modal_1') as HTMLFormElement).showModal()
        }
      >
        Paid
      </button>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box w-full">
          <h1 className="font-serif text-5xl font-bold flex justify-center">
            Ticketist
          </h1>
          <p className=" flex justify-center pt-3 px-2">
            Let's make your event exciting and engaging full of energy only on
            Ticketist
          </p>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchemas}
            onSubmit={(values) => {
              createEventFree(values);
              console.log(values);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <p className="pt-5 pb-2 font-semibold">Image Event</p>
                <div className="border-2 border-dotted h-[200px] flex">
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, setFieldValue)}
                  />
                  <ImagePreview
                    setFieldValue={setFieldValue}
                    mediaRef={mediaRef}
                    media={values.image}
                  />
                </div>
                <div className="">
                  <p className="pt-6 pb-2 font-semibold">Nama Event</p>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name Event"
                    className="border-2 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex justify-betwen gap-28 pt-6">
                  <p className="font-semibold">Date</p>
                  <Field
                    type="date"
                    name="date"
                    placeholder="date event"
                    className="border-2"
                  />
                </div>
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500"
                />

                <div className="flex justify-betwen gap-28 pt-6">
                  <p className="font-semibold">Category</p>
                  <Field
                    type="text"
                    name="category"
                    placeholder="anime/music/sport/game"
                    className="border-2"
                  />
                </div>
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500"
                />
                <div className="flex justify-betwen gap-28 pt-6">
                  <p className="font-semibold">Seat </p>
                  <Field
                    type="text"
                    name="seats"
                    placeholder="seat event"
                    className="border-2"
                  />
                </div>
                <ErrorMessage
                  name="seats"
                  component="div"
                  className="text-red-500"
                />
                {/* <div className="flex justify-betwen gap-24 pt-6">
                  <p className="font-semibold">Category</p>
                  <Field
                    type="select"
                    name="category"
                    placeholder="category"
                    className="border-2"
                  />
                </div>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500"
                /> */}
                <div className="flex flex-col ">
                  <p className="pt-6 pb-2 font-semibold">Location</p>
                  <Field
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="border-2 w-full"
                  />
                  <ErrorMessage
                    name="location"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="pt-6 pb-2 font-semibold">Price</p>
                  <div className="flex gap-4 ">
                    <select className="select select-bordered w-36 max-w-xs  ">
                      <option disabled selected>
                        Currency
                      </option>
                      <option>IDR</option>
                    </select>
                    <Field
                      type="text"
                      name="price"
                      placeholder="20.000"
                      className="border-2 w-full"
                    />
                  </div>
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="pt-6 pb-2 font-semibold">Description</p>
                  <Field
                    as="textarea"
                    type="textarea"
                    name="description"
                    className="border-2"
                  />

                  <ErrorMessage
                    name="coment"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pt-5">
                  <button
                    type="submit"
                    className="border-2 font-semibold rounded-lg border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-full  "
                  >
                    Create event paid
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
}
