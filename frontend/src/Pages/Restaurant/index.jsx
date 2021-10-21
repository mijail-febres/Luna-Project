import MainHeader from "../../components/MainHeader/MainHeader"
import MainFooter from "../../components/MainFooter/MainFooter"
import RestaurantsBody from "../../components/RestaurantsBody/RestaurantsBody";
import UsersBody from "../../components/UsersBody/UsersBody";
import RestaurantContainer from "./indexStyled";
import SearchSubHeader from "../../components/SearchSubheader/SearchSubheader";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants, setUsers } from '../../store/actions';
import NavigationSubheader from "../../components/NavigationSubheader/NavigationSubheader";

function Restaurant(props) {
  const dispatch = useDispatch();
  const[restaurantsList,setList] = useState([]);
  const[usersList,setListUsers] = useState([]);
  const[indexItem,setIndexItem] = useState(1);

  useEffect(() => {
    getRestaurantsInformation();
    getUsersInformation();
  }, []);

  const onClick = (index) => {
    setIndexItem(parseInt(index));
  }

  const getRestaurantsInformation = async () => {
    
    const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/restaurants/';

    const method = 'GET'; // method

    const config = { // configuration
      method : method,
    }

    const response = await fetch(url, config);  //fething
    const data     = await response.json();  // getting the user

    dispatch(setRestaurants(data)) // update restaurant list with middleware
    setList(data)
  }

  const getUsersInformation = async () => {
    
    const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/users/';

    const method = 'GET'; // method

    const config = { // configuration
      method : method,
    }

    const response = await fetch(url, config);  //fething
    const data     = await response.json();  // getting the user

    dispatch(setUsers(data)) // update restaurant list with middleware
    setListUsers(data)
  }

  return (
    <RestaurantContainer>
      <div id = 'main_header'>
        <MainHeader/>
      </div>
      <div id = 'searchHeader'>
          <SearchSubHeader/>
      </div>
      <div id = 'navigationSubheader'>
          <NavigationSubheader onClick={e => {onClick(e)}}/>
      </div>
      <div id = 'separator'>
      </div>
        {indexItem === 0?
            restaurantsList?
              <div id = 'restaurant'>
                <RestaurantsBody restaurantsList={restaurantsList}/>
              </div>
            :  
              null
        :
          indexItem === 1?
            null
          :
            indexItem===2?
              usersList?
                <div id = 'users'>
                  <UsersBody usersList={usersList}/>
                </div>
              :
              null
            :
              null
        }

      <div id = 'footer'>
        <MainFooter/>
      </div>
    </RestaurantContainer>
  );
}

export default Restaurant;
