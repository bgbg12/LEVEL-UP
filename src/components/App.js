import SearchBar from './SeachBar/SearchBar'
import { useEffect, useState } from 'react'
import SearchButton from "./SeachBar/SearchButton"

const App = () => {
  const [productsState, setProductsState]= useState([])
  const[searchValue, setSearchValue] = useState("")

  console.log(searchValue)
  const getData = (userInput) => {
     fetch("https://www.googleapis.com/books/v1/volumes?q=" + userInput)
      .then((res) => res.json())
      .then((productsArray)=>{
        const newProductsState = productsArray.items.map((product) =>{
          return product.etag
        })
        setProductsState(newProductsState)
      })
  }

  useEffect(() => {
    getData("the")
  },[])

  console.log(productsState);
  

const hasProducts = productsState.length >= 0


return(
    <div>
        <h1>Welcome to the Book Search Web App!</h1>
        {hasProducts ? <SearchBar products={productsState} setSearchValue={setSearchValue} searchValue={searchValue}/>:"Loading....."}
        <SearchButton/>
    </div>
    )
  
  
}
  export default App
