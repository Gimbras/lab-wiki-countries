import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function CountriesList() {

    const [countries, setCountries] = useState([]) //can't use null here

    useEffect(() => {
        async function getData(){
            let response= await axios.get('https://restcountries.com/v3.1/all')
            setCountries(response.data)
        }

        getData()

    }, [])    

    // console.log(countries)
    return (
        <div>
        
        {
        countries.map((elem, i) => {
            return (
                <div>                   
                   
                    <img src={elem.flags.svg} />
                    
                    <Link to={`/countries/${elem.cca3}`}>{elem.name.official}</Link>                        
                    
                    
                </div>
            )
        })
            
        }
           
        </div>



    )
}

export default CountriesList