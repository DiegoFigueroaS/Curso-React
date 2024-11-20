import React from 'react'
import useFetch from '../Hooks/useFetch'

const LotHooks = () => {

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');
  return (
    <div>
      <h1>Informacion de los pokemons</h1>
      <hr />

      <pre>{data?.name}</pre>
    </div>
  )
}

export default LotHooks
