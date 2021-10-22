// This Component shows a list of users arranged in columns
// It is called like: <UserBody></UserBody>
// This container can be accessed without authentication

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/actions';
import UsersBodyContainer from './UsersBodyStyled';
import UserPreview from '../UserPreview/UserPreview';

const UsersBody = ({usersList}) => {
    const dispatch = useDispatch();


    useEffect(() => {
        getUserInformation();
    }, []);

    const getUserInformation = async () => {
        const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/users/';

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
            {usersList.map((user,index) =>{
                return (
                    <div key={index} id='userContainer' onClick={index => handleClickOnUser(index)}>
                        <UserPreview 
                            user_name={`${user.username}` }
                            user_picture={user.profile_picture}
                            user_nReviews={user.total_reviews} 
                            description={user.description}
                        >
                        </UserPreview>
                    </div>
                )
            })}
        </UsersBodyContainer>

    )
}

export default UsersBody;