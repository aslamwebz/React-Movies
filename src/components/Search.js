import React, {useState, useEffect} from 'react'
import {API_KEY} from '../actions/config'
import axios from 'axios'

// import {GetLatest as searchAction}  from '../actions/actions'
import Card from './Card'


const Search = (props) => {
    const [data, setdata] = useState([])
    // const searchData = searchAction()
    // console.log(props.match.params.query)
    // console.log(popular)

    useEffect(() => {
        searchHandler()
    },[props.match.params.query])

    const searchHandler = () => {
        const query = props.match.params.query
        let response = ''
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`)
        .then(res => {
            response = res.data.results
            console.log(response)
            setdata(response)
        })
        .catch(err => console.log(err))

    }

    const content = (
            <React.Fragment>
                  <div className="container-fluid">
                    <div className="col-md-12">
                      <div className="row">
                          {data.map(data => (
                              <Card data={data} key={data.id}/>
                            ))} 
                            
                      </div>
                    </div>
                </div>
                </React.Fragment>
          )
  return content
}

export default Search