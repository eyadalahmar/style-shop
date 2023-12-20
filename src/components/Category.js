import React from 'react'
import useAxios from 'axios-hooks'

function Categories() {  
  const [{ data, loading, error }, refetch] = useAxios(
    'https://api.escuelajs.co/api/v1/categories'
    )
  var dataraw=JSON.stringify(data)
  if (loading) return <span>Loading...</span>
  if(error) return <span>error</span>
  if(arguments[0].img){  if(document.getElementById(arguments[0].tagId+'img')) document.getElementById(arguments[0].tagId+'img').src=data[parseInt(arguments[0].img)-1].image
  return null}
  
  return (
    <span>
      {data[parseInt(arguments[0].id)-1].name}
    </span>
  )
}

export default Categories;
