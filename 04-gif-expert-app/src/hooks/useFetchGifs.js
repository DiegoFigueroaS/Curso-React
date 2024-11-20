//UN hook no es mas que una funcion que regresa algo

import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)     
        setIsLoading(false)   
    }

    //? Hook de efecto
    //* Basicamente le decimos para disparar efectos secundarios
    //Procesos que quereos ejecutar cuando algo suceda
    //EJ: Cuando un state cambie, cuando se renderiza por primera vez, etc
    useEffect(() => {
      getImages()
    }, [])
    //Si dejo el tercer argument ovacio, solo se disparara una vez

    return {
        images,
        isLoading,
    }
}
