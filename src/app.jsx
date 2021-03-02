import React, { useState, useEffect } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Films from './pages/films'
import People from './pages/people'

const App = () => {
    
    return (
        <BrowserRouter>
            <switch>
                <Route exact path='/'>
                 < Home />
                        

                </Route>
                <Route exact path='/films'>
                < Films />

                </Route>
                <Route exact path='/people'>
                   < People /> 

                </Route>
            </switch>

        </BrowserRouter>
    );

   


};

export default App;