import React, { useEffect } from 'react'

interface TypesLog {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalLogin: React.FC<TypesLog> = ({ children, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div onClick={onClose} className='fixed z-50 inset-0 w-full h-screen '>
            
            <div className='relative'>
                {children}
            </div>
        </div>
    )
}

export default ModalLogin
