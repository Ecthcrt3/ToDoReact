//This component will house a button for each category, as well as an ALL button to remove filtering in Resources.js
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function FilterCat(props) {
    // we need to access and store categories from the api to map the buttons
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.genecathcart.com/api/Categories`).then(response => {
            setCategories(response.data)
        })
    }, []);
  return (
    <div className='text-center mt-5'>
        <button className="btn btn-outline-info bg-dark m-1" onClick={() => props.setFilter(0)}>All</button>
        {/* Below we map all of the categories to a button that will be used to filter resources on that category */}
        {categories.map(cat => 
                <button className="btn btn-outline-info bg-dark m-1" key={cat.categoryId} onClick={() => props.setFilter(+cat.categoryId)}>{cat.categoryName}</button>
            )}
    </div>
  )
}
