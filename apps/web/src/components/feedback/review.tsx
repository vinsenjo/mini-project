'use client'
import Rating from "./rating";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    coment: Yup.string().required("please enter your comments"),
    nama: Yup.string().required('please enter your name'),
    email: Yup.string().email().required('please enter your email')
        .matches(
            /^\S+@\S+\.\S+$/
        )
})
export interface validationSchema {
    coment: string
    nama: string
    email: string
}

export default function Review() {
    const intialValues: validationSchema = {
        coment: "",
        nama: "",
        email: ""
    }
    return (
        <section>
            <Formik
                initialValues={{ intialValues: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form>
                        <p className="flex justify-center pb-3">Do you have any suggestions to improve our product and service?</p>
                        <div className="flex flex-col px-16 ">
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

                        <p className="flex justify-center pt-9">How satisfied are you with our company overall?</p>
                        <Rating />


                        <div className="flex justify-center">
                            <p className="pt-9 w-[500px] ">Please leave your email address if you would like us to contact you regarding any questions.</p>
                        </div>

                        <div className="flex justify-center gap-16">
                            <div>
                                <p>Name</p>
                                <Field
                                    type='text'
                                    name='nama'
                                    placeholder='Your name'
                                    className='border-2'

                                />
                                <ErrorMessage
                                    name='nama'
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                            <div>
                                <p>Email</p>
                                <Field
                                    type='email'
                                    name='email'
                                    placeholder='email'
                                    className='border-2'
                                />
                                <ErrorMessage
                                    name='email'
                                    component='div'
                                    className='text-red-500'
                                />
                            </div>
                        </div>
                        <div className="py-10">
                            <hr className="h-0.5 flex-grow bg-slate-400 " />
                        </div>
                    </Form>
                )}
            </Formik>

        </section>
    )
}