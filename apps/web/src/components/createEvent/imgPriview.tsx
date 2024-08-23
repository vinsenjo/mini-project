'use client'
import React from 'react';

interface ImagePreviewProps {
    media?: File | null;
    setFieldValue: (field: string, values: any, shouldValidate?: boolean) => void;
    mediaRef: React.RefObject<HTMLInputElement>;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ media, setFieldValue, mediaRef }) => {
    const [imageUrl, setImageUrl] = React.useState<string | null>(null);
    console.log(media);
    
    const onRemove = () => {
        setFieldValue('media', null)
        if (mediaRef.current) {
            mediaRef.current.value = ''
        }
    }

    React.useEffect(() => {
        if (media) {
            const objectUrl = URL.createObjectURL(media);
            setImageUrl(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setImageUrl(null);
        }
    }, [media]);

    if (!imageUrl) {
        return null;
    }
    const handleClick = (value: any) => {
        console.log(value.target.value);  
       }

    return (
        <div className="relative flex flex-col justify-start">
            <img
                src={imageUrl}
                className="rounded-xl"
                alt="Preview"
                style={{ maxWidth: '300px', maxHeight: '200px', objectFit: 'cover' }}
            />
        </div>
    );
};

export default ImagePreview;