import { navigate } from '@/libs/actions/server';
import { Formik } from 'formik';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';
import { useRouter } from "next/navigation";
import { Event } from 'cypress/types/jquery';
import { getEventQuery } from '@/libs/actions/event';


export interface DetailEventSeacrh {
    name: string,
    date: string,
    location: string
}

const validationSchemas = Yup.object({
    search: Yup.string().required()
})

export interface validationSchema {
    search: string
}
export default function Searchbar () {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [events, setEvents] = useState<DetailEventSeacrh[]>([]);
    const [search, setSearch] = useState<string>('');
   
    useEffect(() => {
        const fetchData = async () => {
            const event = await getEventQuery('term:string');
            setEvents(event.result.event);
        };
    
        fetchData();
    }, []);

    
    useEffect(() => {
        const url = `${pathname}?${searchParams}`
        console.log(url)
    }, [pathname, searchParams])

    const initialValues: validationSchema = {
        search: ''
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )
    const handleSearch = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => {
        const keyword = searchRef.current?.value;
        if (!keyword) return;
        if (event.type === "click" || (event as React.KeyboardEvent).key === "Enter") {
            event.preventDefault();
            router.push(`/search/${keyword}`);
        }
    };
  
useEffect(() => {
        const TimeOut = setTimeout(() => {
            if (search.trim() !== "") {
                (search)
            } else {
                setEvents([])
            }
        }, 2000)
        return () => clearTimeout(TimeOut)
    }, [search])

   
    return (
        <section>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemas}
                onSubmit={(values, actions) => {
                    navigate(('/search') + '?' + createQueryString('search', 'asc'))
                    setTimeout(() => {
                        alert(JSON.stringify(values, null))
                        console.log(values);
                        actions.setSubmitting(false)
                    },)
                }}
            >
                {props => (
                    <div className="text-white  items-center flex gap-2">
                        <form onSubmit={props.handleSubmit}>
                            <input
                                type="search"
                                placeholder="Search....."
                                className="px-3 rounded-full md:w-[600px] w-[230px] mx-2  bg-white border-black placeholder:text-black border-2  lg:mr-10 text-black h-[40px] focus:outline-none items-center"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.search}
                                name="search"
                            />
                            {props.errors.search && <div id="feedback">{props.errors.search}</div>}
                            {/* <button type="submit">Submit</button> */}
                            <button
                                className="absolute right-3 top-2"
                                onClick={(event) => handleSearch(event)}
                            >
                                <FaSearch className="text-white" />
                            </button>
                            <Link
                                href={
                                    pathname + '?' + createQueryString('sort', 'desc')
                                }
                            >
                            </Link>
                        </form>
                    </div>
                )}
            </Formik>
        </section>
    )
}

