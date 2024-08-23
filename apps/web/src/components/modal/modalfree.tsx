'use client'
import AlbumEvent from "../createEvent/img";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImagePreview from "../createEvent/imgPriview";
import { useRef } from "react";

const validationSchemas = Yup.object({
    image: Yup.mixed().required("please enter your img"),
    nameEvent: Yup.string().required("please enter your name event"),
    date: Yup.date().required("please enter your date event"),
    time: Yup.string().required("please enter time event"),
    seat: Yup.number().required("please enter seat"),
    select: Yup.string().required("please enter your category"),
    location: Yup.string().required("please enter your location"),
    description: Yup.string().required("please description event")
})

export interface validationSchema {
    image: File | null
    nameEvent: string
    date: Date
    time: string
    seat:Number
    select: string
    location: string
    description: string
}

export default function ModalFree() {
    const mediaRef = useRef<HTMLInputElement | null>(null)

    const handleFileChange = (event: any, setFieldValue: any) => {
        const file = event.target.files[0]
        if (file) {
            setFieldValue('image', file)
        }
    }
    const initialValues: validationSchema = {
        image: null,
        nameEvent: "",
        date: new Date(),
        time: "",
        seat:0,
        select: "",
        location: "",
        description: ""
    }

    return (
        <section>
            <button className="btn w-48 bg-black text-white hover:border-[#FF7B4F] hover:bg-[#FF7B4F] text-xl" onClick={() => (document.getElementById('my_modal_2') as HTMLFormElement).showModal()}>Free</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h1 className="font-serif text-5xl font-bold flex justify-center">TicketList</h1>
                    <p className=" flex justify-center pt-3 px-2">Let's make your event exciting and engaging full of energy only on TicketList</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchemas}
                        onSubmit={(values) => {
                            alert(JSON.stringify(values))
                            console.log(values);
                        }}
                    >
                        {({ setFieldValue, values }) => (
                            <Form>
                                <p className="pt-5 pb-2 font-semibold">Image Event</p>
                                <div className="border-2 border-dotted h-[200px] flex flex-col">
                                    <input type="file" onChange={(e) => handleFileChange(e, setFieldValue)} />
                                    <ImagePreview setFieldValue={setFieldValue} mediaRef={mediaRef} media={values.image} />
                                </div>
                                <div className="">
                                    <p className="pt-6 pb-2 font-semibold">Nama Event</p>
                                    <Field
                                        type='text'
                                        name='nameEvent'
                                        placeholder='Name Event'
                                        className='border-2 w-full'

                                    />
                                    <ErrorMessage
                                        name='nameEvent'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>
                                <div className="flex justify-betwen gap-28 pt-6">

                                    <p className="font-semibold">Date</p>
                                    <Field
                                        type='date'
                                        name='date'
                                        placeholder='date event'
                                        className='border-2'

                                    />
                                </div>
                                <ErrorMessage
                                    name='date'
                                    component='div'
                                    className='text-red-500'
                                />

                                <div className='flex justify-betwen gap-28 pt-6'>
                                    <p className="font-semibold">Time</p>
                                    <Field
                                        type='time'
                                        name='time'
                                        placeholder='time event'
                                        className='border-2'
                                    />
                                </div>
                                <ErrorMessage
                                    name='time'
                                    component='div'
                                    className='text-red-500'
                                />
                                <div className='flex justify-betwen gap-28 pt-6'>
                                    <p className="font-semibold">Seat </p>
                                    <Field
                                        type='number'
                                        name='number'
                                        placeholder='seat event'
                                        className='border-2'
                                    />
                                </div>
                                <ErrorMessage
                                    name='number'
                                    component='div'
                                    className='text-red-500'
                                />
                                <div className="flex flex-col ">
                                    <p className="pt-6 pb-2 font-semibold">Location</p>
                                    <Field
                                        type='text'
                                        name='location'
                                        placeholder='Location'
                                        className='border-2 w-full'

                                    />
                                    <ErrorMessage
                                        name='location'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>

                                <div className="flex flex-col ">
                                    <p className="pt-6 pb-2 font-semibold">Description</p>
                                    <Field
                                        as="textarea"
                                        type='textarea'
                                        name='coment'
                                        className='border-2'
                                    />

                                    <ErrorMessage
                                        name="coment"
                                        component='div'
                                        className="text-red-500" />
                                </div>
                                <div className="pt-5">
                                    <button type="submit" className="border-2 font-semibold rounded-lg border-[#FF7B4F] bg-[#FF7B4F] text-white h-9 w-full  ">Create event free</button>
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
