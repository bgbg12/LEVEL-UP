import React, {useState} from "react"
import "./SearchBar.css"

const SearchBar = (props) => {

    const handleInputChange = (event) =>{
        props.setSearchValue(event.target.value)
    }
    const handleClearClick = () =>{

    }

    const shouldDisplayButton = true

    const filteredProducts = props.products.filter((product) => {
        return product.includes(props.searchValue)
    })


    return (
        <div>
            <input type="text" onChange={handleInputChange}/>
            {shouldDisplayButton && <><button onClick={handleClearClick}>clear </button>
            <ul>
                {/* {filteredProducts.map((product) => {
                    return <li key={product}>{product}</li>
                })} */}
            </ul></>
    
            }</div>
        )}


export default SearchBar