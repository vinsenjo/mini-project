import { useRouter } from "next/router"
import { useRef } from "react"
import { FaSearch } from "react-icons/fa";

export default function InputSearch() { 
    const searchRef = useRef(null)
    // const router = useRouter()

    const handleSearch = (event) => {
        if(event.key === "enter" || event.type === "click"){
            event.preventDefault()
            const keyword = searchRef.current.value
            // router.push(`search/${keyword}`)
        }
    }
    return (
        <div className="relative w-full max-w-xs">
            <input
                placeholder="Search event"
                ref={searchRef}
                className="text-black p-2 pl-10 rounded-sm border border-gray-300 w-full"
            />
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black"
                onClick={handleSearch}
            >
                <FaSearch size={20} />
            </button>
        </div>
    )
}

