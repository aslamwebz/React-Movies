import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import history from './history'


const Navbar = (props) => {

    const [input, setInput] = useState('')
    
    const submitHandler = (e) => {
        history.push('')
        e.preventDefault()
        // Search(input);
        let query = `/search/${input}`
        console.log(query)
        history.push(query)
    }

    const content = (
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <Link className="navbar-brand" to="/">React Movies </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav ml-auto">
                        <form className="form-inline my-2 my-lg-0" onSubmit={submitHandler}>
                            <input className="form-control mr-sm-4" type="search" placeholder="Search Movie" aria-label="Search" onChange={(e) => setInput(e.target.value)}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <li className="nav-item active">
                        <a className="nav-link" href="/"><span className="sr-only">(current)</span></a>
                        </li>
                        {/* <li className="nav-item dropdown ml-auto">
                        <a className="nav-link dropdown-toggle" href="/" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdown03">
                            <a className="dropdown-item" href="/">Action</a>
                            <a className="dropdown-item" href="/">Another action</a>
                            <a className="dropdown-item" href="/">Something else here</a>
                        </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
       </div>
    )
    return  content
}

export default withRouter(Navbar);