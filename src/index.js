import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext/AuthContext';
import { MovieContextProvider } from './context/movieContext/MovieContext';
import { ListContextProvider } from './context/listContext/ListContext';
import { UserContextProvider } from './context/userContext/UserContext';


const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

root.render(
    <AuthContextProvider>
        <UserContextProvider>
            <MovieContextProvider>
                <ListContextProvider>
                    <App />
                </ListContextProvider>
            </MovieContextProvider>
        </UserContextProvider>
    </AuthContextProvider>
)