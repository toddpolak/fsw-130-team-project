import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTvShow, deleteTvShow } from '../redux/tvShows'

function TvShows({ dispatch, store }) {

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
            dispatch(addTvShow(input))
            setInput(initInput)
        }
    }

    return (
        <div>
            <h1>TV Shows</h1>
            <p>Add your Tv Show below</p>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    value={input.title}
                    onChange={handleChange}
                    placeholder='TV Show' />
                <button>Add</button>
            </form>
            <div className='display-list'>
                {store.tvShows.map((tvShow, index) =>
                    <div key={index}>
                        <div className='display-item'>{tvShow.title}</div>
                        <div className='delete-btn'>
                            <button onClick={() => {dispatch(deleteTvShow(index))}}>
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

export default connect(mapStateToProps)(TvShows)
