import {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CountryDetails() {
const {cca3} = useParams()
const [countryInfo, setCountryInfo] = useState([])

useEffect(() => {
async function getData(){
    let response= await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
    setCountryInfo(response.data)
            
        }

        getData()

    }, [cca3])

    if (!countryInfo) {
        return <img src ='https://tenor.com/bbmjX.gif'/>
    }

    return (
                
          <div>  
            {
                countryInfo.map((elem) => {
                    return (
                    <div>
                            <img src={elem.flags.svg} />
                               <h1>{elem.name.official}</h1>
                                <h3>'Capital:' {elem.capital}</h3>
                                <h3>'Area:' {elem.area} m2</h3>
                    </div>           
                    )
                })
            }
            
            </div>
        
    )
}

export default CountryDetails








// function CountryDetail() {

//     const {id} = useParams()
//     const [detail, setDetail] = useState(null)

    
//     useEffect(() => {
        
//         async function getData(){
//             let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             const {height, weight, sprites} = response.data
//             let pokemon = {
//                 id: id, 
//                 height: height,
//                 weight: weight, 
//                 image: sprites.other.dream_world.front_default
//             }
//             setDetail(pokemon)
//         }
//         getData()
       
//     }, [id])



//     // Loading state when we have no data
//     if (!detail) {
//         return <p>Loading . . . </p>
//     }

//     return (
//         <div>
//             <h4>Pokemon Detail</h4>
//             <img src={detail.image} />
//         </div>
//     )
// }

// export default PokemonDetail