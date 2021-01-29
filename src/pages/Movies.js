import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../redux/movies'

function Movies({ dispatch, movies }) {

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
            <h4>Project 3: Movies & TV with Redux (React)</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        value={input.title}
                        onChange={handleChange}
                        placeholder='Movie Title' />
                    <button>Add Movie</button>
                </form>

                <div>
                    {movies.map((movie, index) =>
                            <div key={index}>{movie.title}</div>
                        )
                    }
                </div>
         </div>
    )
}

const mapStateToProps = state => {
    return { movies: state }
}

export default connect(mapStateToProps)(Movies)
