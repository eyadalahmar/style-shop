const Search=(props)=>{
const results=[/*elements*/]
const click=(p)=>{
window.location.href='/'+p.category.toLowerCase()
  }
        return (
        
          results.map((a)=>{return(
        <div onClick={click({id:a.id,category:a.category.name})}><img src={a.images[0]} /></div>)
          }))

}