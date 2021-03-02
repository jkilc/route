import React, { Fragment } from 'react'

const Films = () => {
    return (
        <>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="/" role="tab">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/films" role="tab">View Films</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/people" role="tab">View People</a>
                </li>

            </ul>
            
        </>


    )
};

const FilmList = (props) => {

    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h4>{props.film.title}</h4>
                    <p class="card-text">{props.film.description}</p>
                    <footer className='blockquote-footer'><a target='null' href={`https://ghibliapi.herokuapp.com/films/${props.film.id}`}>Link To Raw JSON</a></footer>
                </div>
            </div>
        </>
    )
}


export default Films;
