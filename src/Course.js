import { useState } from "react";
// weekly = true and monthly = false
import FilterProduct from "./FilterProduct";
import { Link } from "react-router-dom";
const Course = () => {
    const [cources, setCourses] = useState([
        {
            title: 'WINTER WORKSHOP ON ML',
            id: 1,
            frequency: true,
            description: 'weekly ML workshop'

        },
        
        {
            title: 'DATA SCIENCE LECTURES',
            id: 2,
            frequency: false,
            description: 'Students will learn DATA SCIENCE'
        },

        {
            title: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE',
            id: 3,
            frequency: true,
            description: 'introduction to AI and application'
        },

        {
            title: 'DATA ANALYTICS AND APPLICATION',
            id: 4,
            frequency: false,
            description: 'students will know more about Data Analytics and expand their knowledge'
        },

        {
            title: 'ML AND AI IN DATA ANALYSIS',
            id: 5,
            frequency: true,
            description: 'how ML and AI help in Data Analysis'
        }
    ]);
    

    let [filterTextvalue, setFilterText] = useState('all');

    let filterProductList = cources.filter((product) => {
        if(filterTextvalue === 'weekly'){
            return product.frequency === true;
        } else if(filterTextvalue === 'monthly'){
            return product.frequency === false;
        } else {
            return product;
        }
    })


    function onFilterValueSelected(filterValue){
          console.log(filterValue);
          setFilterText(filterValue);
    }


    return ( 
        
        <div className="courses">
            
           <FilterProduct filterValueSelected={onFilterValueSelected}></FilterProduct>
            {filterProductList.map((cource) => (
                <div className="cource-preview" key={cource.id}>
                    <Link to={`/course/${cource.id}`}>
                       <h2>{ cource.title }</h2>
                       <p>desription: { cource.description }</p>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default Course;