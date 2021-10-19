// This Component shows a list of restaurants arranged in columns
// It is called like: <RestaurantBody token={'sometoken'}></RestaurantBody>
// I am assuming that we already know the token for this session, and we pass it 
// with props, in any case, I left commented the steps to recover the token

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants } from '../../store/actions';
import RestaurantsBodyContainer from './RestaurantsBodyStyled';
import RestaurantPreview
 from '../RestaurantPreview/RestaurantPreview';
// import { updateToken } from '../../store/actions/index';


// const tokenSelector = (state) => {
//     return state.token;
// }

const RestaurantsBody = (token) => {
    const dispatch = useDispatch();
    // const token = useSelector(tokenSelector);


    useEffect(() => {
        // const token = localStorage.getItem('auth-token'); // get the token form localStorage
        // if (token) {
        //     dispatch(updateToken(token)); // updating token with hooks
            getRestaurantInformation();
        // }
    }, []);

    const getRestaurantInformation = async () => {
        const url = 'http://luna-dhmp/api/restaurants/';

        const method = 'GET'; // method

        const headers = new Headers({  // headers
            'Authorization': `Bearer ${token}`
        });

        const config = { // configuration
            method : method,
            headers: headers
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user

        dispatch(setRestaurants(data)) // updating token with middleware

    }

    const handleClickOnRestaurant = (index) => {
        //redirect to page of restaurant
    }

    return(
        <RestaurantsBodyContainer>
            {[...Array(20).keys()].map(index =>{
                return (
                    <div key={index} id='restaurantContainer' onClick={index => handleClickOnRestaurant(index)}>
                        <RestaurantPreview 
                        restaurant_name='The blue Oyster'
                        restaurant_address='Some place in Zürich' 
                        restaurant_nReviews={Math.floor(Math.random()*(100))} restaurant_rating={(Math.random() * (5.0 - 1.0) + 1.0).toFixed(1)}/>
                    </div>
                )
            })}
        </RestaurantsBodyContainer>
    )
}

export default RestaurantsBody;