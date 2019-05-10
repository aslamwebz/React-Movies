import {useState, useEffect} from 'react'
import {API_KEY} from './config'
import axios from 'axios';

 export const GetPopular = () => {

    const [pfetchedData, psetFetchedData] = useState([])

    useEffect(() => {
        getPData()
    },[])


    const getPData = (() => {
        let response = ''
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            response = res.data.results
            console.log(response)
            psetFetchedData(response)
        })
        .catch(err => console.log(err))

    })
    
    return pfetchedData

}

export const GetLatest = () => {

    const [lfetchedData, lsetFetchedData] = useState([])

    useEffect(() => {
        getLData()
    },[])

    const getLData = (() => {
        let response = ''
        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            response = res.data.results
            console.log(response)
            lsetFetchedData(response)
        })
        .catch(err => console.log(err))

    })

    return lfetchedData
}

// export const Search = (query) => {

//     const [data, setdata] = useState([])

//     useEffect(() => {
//         getSData()
//     },[])

//     const getSData = (() => {
//         let response = ''
//         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
//         .then(res => {
//             response = res.data.results
//             // console.log(response)
//             setdata(response)
//         })
//         .catch(err => console.log(err))

//         // return response

//     })

//     return data
// }

// export const Search = (query) => {

//     const [search, setSearch] = useState()

//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}
//     `)
//     .then((data) => setSearch(data))
//     .catch(err => console.log(err))


//     return search
// }
