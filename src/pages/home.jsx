import React, { Fragment } from 'react'
import Logo from './imgsrc/ghib.jpg'
const Home = () => {
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
            <div id='conBod'>
                <div class="card">
                    <div class='logocon'>
                <img class="logo" src={Logo} />

                    </div>
                        <div class="card-body">
                            <h5 class="card-title">Studio Ghibli API & Routing Lab </h5>
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sunt ab, veritatis sint numquam debitis ut minima porro perspiciatis labore, fugiat adipisci voluptatem repellendus sequi voluptates ullam molestias ad laborum?</p>
                            
                        </div>
                </div>
            </div>


        </>


    )
};

export default Home;