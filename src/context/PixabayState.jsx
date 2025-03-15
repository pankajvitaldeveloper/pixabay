import React, { useEffect, useState } from 'react';
import PixabayContext from './PixabayContext';

const PixabayState = ({ children }) => {
    const apiKey = "49354568-6e4232734eb2062a42e936b8f";
    const [images, setImages] = useState([]);  // Store fetched images
    const [searchInput , setSearchInput] = useState('london');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&image_type=photo&pretty=true&per_page=50`);
                const data = await response.json();
                
                if (data.hits) {
                    setImages(data.hits);  // Store images in state
                } else {
                    console.error("No images found");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

    }, [searchInput]);

    const fetchDataByCategory = async (category) => {
        try {
            const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&category=${category}&image_type=photo&pretty=true&per_page=100`);
            const data = await response.json();
            
            if (data.hits) {
                setImages(data.hits);  // Store images in state
            } else {
                console.error("No images found");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    return (
        <PixabayContext.Provider value={{ images, fetchDataByCategory, setSearchInput }}>
            {children}
        </PixabayContext.Provider>
    );
};

export default PixabayState;
