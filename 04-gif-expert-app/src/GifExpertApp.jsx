import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    //! NO PONER CONDICIONALMENTE UN HOOK, REACT PERDERA EL INDEX DEL MISMO, SU POSICION
    const [ categories, setCategories ] = useState([])

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;
        if(category.trim().length <= 1) return;
        setCategories((e) => [category, ...e])
    }

    //! NO USEMOS EL ID - USEMOS EL UID, ETC, porque si borramos el 0 siemrpe existira un 0 
    //! NECESITAMOS ALGO TOTALMENTE UNICO
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            {categories.map((category, index) => (<GifGrid key={category} category={category}/>))}
        </>
    )
}

export default GifExpertApp