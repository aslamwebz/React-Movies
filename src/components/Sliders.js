import React from "react";
import Card from './Card'
import {GetPopular, GetLatest}  from '../actions/actions'


const Sliders = () => {
  
    const popular = GetPopular()
    const latest = GetLatest()
    
    const content = (
        <React.Fragment>
          <div id="movies">
            <div className="container-fluid">
            <div className="col-md-12 line">
              <h1>Popular Movies</h1>
            </div>
              <div className="col-md-12">
                <div className="row">
                    {popular.map(data => (
                        <Card data={data} key={data.id}/>
                      ))} 
                </div>
              </div>
          </div>
          <div className="container-fluid">
          <div className="col-md-12 line">
            <h1>Latest Movies</h1>
          </div>
            <div className="col-md-12">
              <div className="row">
                {latest.map(data => (
                    <Card data={data} key={data.id} />
                ))} 
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    )

    return content
}

export default Sliders