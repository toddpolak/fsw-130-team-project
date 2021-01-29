import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../redux/movies'

function Movies({ dispatch, store }) {

    const initInput = {
        title: ''
    }

    const [input, setInput] = useState(initInput)

    function handleChange(e) {
        const { name, value } = e.target

        setInput(prevInput => ({ ...prevInput, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addMovie(input))
        setInput(initInput)
    }

    return (
        <div>
            <h1>Movies Page</h1>
            <h3>Project 3: Movies & TV with Redux (React)</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        value={input.title}
                        onChange={handleChange}
                        placeholder='Movie Title' />
                    <button>Add</button>
                </form>
                <div>
                {store.movies.map((movie, index) =>
                    <div key={index}>{movie.title}</div>
                )}
                </div>
         </div>
    )
}

const mapStateToProps = state => {
    return { store: state }
}

export default connect(mapStateToProps)(Movies)
