import EpList from './Info/EpList';
import DirectInfo from './Info/DirectInfo';
import Info3 from './Info/Suggest';
import Suggest from './Info/Suggest';
import './MovieInfo.css'
import React, { useContext, useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { AppContext } from '../../../context/AppContext';

const MovieInfo = ({ setInfo,info, film }) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjM3MTJiZGJjODRjNzZmYjkwMWI4OSIsImVtYWlsIjoidHJhbm5odXRwaGF0dHZAZ21haWwuY29tIiwiaWF0IjoxNzE0NTg0MjA4LCJleHAiOjE3MTQ2MDIyMDh9.PPCLA9mHxdS_wPyplsIHWh3lGmm9MLwm-MEB8fevS38'
    const userId = jwtDecode(token).id
    const {movies}= useContext(AppContext)
    const [isLoadingRecommendFilm, setIsLoadingRecommendFilm] = useState(true)
    const [recommendFilms, setRecommendFilms] = useState([])
    
    const getRecommendFilms = () => {
        setIsLoadingRecommendFilm(true)
        fetch(`http://localhost:8081/v1/api/user/recommendFavorite/${userId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success != false)
                    setRecommendFilms( movies.filter(movie => data.includes(movie._id)))

            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                setIsLoadingRecommendFilm(false)
            })
    }
    useEffect(()=>{
getRecommendFilms()
        

    },[])
    return (
        <div className='movieinfo-container'>
            {info == 1 && (
                <EpList
                />
            )}
            {info == 2 && (
                <DirectInfo
                    data={film.cast}
                />
            )}
            {info == 3 && (
                <DirectInfo
                    data={film.directors}
                />
            )}
            {info == 4 && (
                <Suggest data={recommendFilms} setInfo={setInfo}/>
            )}
        </div>
    );
}

export default MovieInfo;