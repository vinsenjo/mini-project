import React from "react";

interface AvatarProps {
    src: string;
    alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
    return (
        <div className="w-20 lg:w-40">
            <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    )
}