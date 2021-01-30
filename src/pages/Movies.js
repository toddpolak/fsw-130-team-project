import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMovie, deleteMovie } from '../redux/movies'

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

        if (input.title !== '') {
            dispatch(addMovie(input))
            setInput(initInput)
        }
    }

    return (
        <div>
            <h1>Movies</h1>
            <p>Add your movie below</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        name='title'
                        value={input.title}
                        onChange={handleChange}
                        placeholder='Movie Title' />
                    <button>Add</button>
                </form>
                <div className='display-list'>
                {store.movies.map((movie, index) =>
                    <div key={index}>
                        <div className='display-item'>{movie.title}</div>
                        <div className='delete-btn'>
                            <button onClick={() => { dispatch(deleteMovie(index)) }}>
                                Delete
                            </button>
                        </div>
                    </div>
                )}
                </div>
         </div>
    )
}

const mapStateToProps = state => {
    return { store: state }
}

export default connect(mapStateToProps)(Movies)
