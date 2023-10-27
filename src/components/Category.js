import React from 'react'
import useAxios from 'axios-hooks'

function Categories() {  
  const [{ data, loading, error }, refetch] = useAxios(
    'https://api.escuelajs.co/api/v1/categories'
    )
  var dataraw=JSON.stringify(data)
  if (loading) return <span>Loading...</span>
  if(error) return <span>error</span>
  return (
    <span>
      {data[parseInt(arguments[0].id)-1].name}
    </span>
  )
}

export default Categories;
