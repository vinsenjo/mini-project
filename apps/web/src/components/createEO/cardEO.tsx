'use client'

import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Decimal from 'decimal.js';
import format from "date-fns";
import ModalFree from "../modal/modalfree";
import ModalPaid from "../modal/modalpaid";
// import TypeEO from "./typeEO";

const validationSchema = Yup.object({
    namaevent: Yup.string().required("enter your nama event"),
    date: Yup.date().required("please enter your date event"),
    time: Yup.string().required("please enter time event"),
    location: Yup.string().required("please enter your location"),
    pince: Yup.number().required("please enter price event"),
    description: Yup.string().required("please description event")
})

export interface validationSchema {
    namaevent: string
    date: Date
    time: string
    location: string
    price: number
    description: string
}

export default function CardEO() {
    const initialValues: validationSchema = {
        namaevent: "",
        date: new Date(),
        time: "",
        location: "",
        price: 0,
        description: ""
    }
    return (
        <section className="min-h-screen  flex justify-center items-center bg-[#e1e1e1]">
            <div className="bg-white rounded-xl mx-auto lg:w-[700px]  h-full overflow-auto flex flex-col p-8 ">
                
                <Formik
                    initialValues={{ intialValues: "" }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {() => (
                        <Form>
                            <div className="flex flex-col px-16">
                                <p>Nama Event</p>
                                <Field
                                    type='text'
                                    name='namaevent'
                                    placeholder='Nama Event'
                                    className='border-2'

                                />
                                <ErrorMessage
                                    name='namaevent'
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                            <div className="flex justify-center gap-16">
                                <div>
                                    <p>Date</p>
                                    <Field
                                        type='date'
                                        name='date'
                                        placeholder='date event'
                                        className='border-2'

                                    />
                                    <ErrorMessage
                                        name='date'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>
                                <div>
                                    <p>Time</p>
                                    <Field
                                        type='time'
                                        name='time'
                                        placeholder='time event'
                                        className='border-2'
                                    />
                                    <ErrorMessage
                                        name='time'
                                        component='div'
                                        className='text-red-500'
                                    />
                                </div>

                            </div>
                            <div className="flex flex-col px-16">
                                <p>Location</p>
                                <Field
                                    type='text'
                                    name='location'
                                    placeholder='Location'
                                    className='border-2'

                                />
                                <ErrorMessage
                                    name='location'
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                            <div className="flex flex-col px-16">
                                <p>Price</p>
                                <Field
                                    type='number'
                                    name='price'
                                    placeholder='price'
                                    className='border-2'
                                />
                                <ErrorMessage
                                    name='price'
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                            <div className="flex flex-col px-16 ">
                                <p>Description Event</p>
                                <Field
                                    as="textarea"
                                    type='textarea'
                                    name='description'
                                    className='border-2'
                                />
                                <ErrorMessage
                                    name='description'
                                    component='div'
                                    className="text-red-500" />
                            </div>
                        </Form>
                    )}
                </Formik>
            <div className="flex justify-center gap-16 pt-8">
                <h1 className="flex items-center">Type Event</h1>
                <ModalPaid/>
                <ModalFree/>
            </div>
            </div>

        </section>
    )
}