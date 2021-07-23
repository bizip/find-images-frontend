import { useState, useEffect } from 'react';
import axios from 'axios';
const SearchImage = (query) => {
    const [image, setImage] = useState({
        message: []
    });



    useEffect(() => {
        const fetchData = async () => {
            try {
                await
                    axios.get(`https://find-images-backend.herokuapp.com/id?id=${query} `)
                        .then(image => {
                            setImage(image.data);

                        })

            } catch (err) {
                console.log(err)

            }
        }

        fetchData();
    }, [query]);
    return image;

}
export default SearchImage;