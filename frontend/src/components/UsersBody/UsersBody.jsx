
// This Component shows a list of users arranged in columns
// It is called like: <UserBody></UserBody>
// This container can be accessed without authentication

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../store/actions';
import UsersBodyContainer from './UsersBodyStyled';
import UserPreview
 from '../UserPreview/UserPreview';

const UsersBody = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        getUserInformation();
    }, []);

    const getUserInformation = async () => {
        const url = 'http://luna-dhmp/api/users/list/';

        const method = 'GET'; // method

        const config = { // configuration
            method : method,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user

        dispatch(setUsers(data)) // update user list with middleware

    }

    const handleClickOnUser = (index) => {
        //redirect to page of user
    }

    return(
        <UsersBodyContainer>
            {[...Array(20).keys()].map(index =>{
                return (
                    <div key={index} id='userContainer' onClick={index => handleClickOnUser(index)}>
                        <UserPreview 
                            user_name='Laurent H.' 
                            user_nReviews='6' 
                            restaurant_name='Colinz Bar' 
                            contentReview="Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell">
                        </UserPreview>
                    </div>
                )
            })}
        </UsersBodyContainer>
    )
}

export default UsersBody;