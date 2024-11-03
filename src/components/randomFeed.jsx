import React, { useEffect } from 'react';
import { Cards } from './card';

const Feed = () => {
    const [images, setImages] = React.useState([]);

    async function refreshImages() {
        setImages([]);

        try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search?limit=12', {
                headers: {
                    "content-type": "application/json",
                    'x-api-key': import.meta.env.VITE_CAT_API_KEY
                }
            });
            const json = await response.json();
            setImages(json);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        refreshImages();
    }, []);

    return (
        <>
            <div className="grid grid-cols-4  gap-4 sm:grid-cols-8 md:grid-cols-12">
                {images && images.map(image => (
                    <div key={image.id} className="col-span-2 sm:col-span-2 md:col-span-4 gap-y-4  flex justify-center">
                        <Cards data={image}  />
                    </div>
                ))}
            </div>
            {images.length === 0 && (
                <div className="flex justify-center mt-4">
                    <div className="loader border-t-transparent border-blue-500 border-4 rounded-full w-8 h-8 animate-spin"></div>
                </div>
            )}
        </>
    );
};

export default Feed;