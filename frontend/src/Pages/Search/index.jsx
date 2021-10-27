import MainHeader from "../../components/MainHeader/MainHeader"
import MainFooter from "../../components/MainFooter/MainFooter"
import RestaurantsBody from "../../components/RestaurantsBody/RestaurantsBody";
import ReviewsBody from "../../components/ReviewsBody/ReviewsBody";
import UsersBody from "../../components/UsersBody/UsersBody";
import SearchContainer from "./indexStyled";
import SearchSubHeader from "../../components/SearchSubheader/SearchSubheader";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants, setUsers, setSearch, setReviews } from '../../store/actions';
import NavigationSubheader from "../../components/NavigationSubheader/NavigationSubheader";
import store from '../../store/index'

const Search = (props) => {
  const dispatch = useDispatch();
  const[restaurantsList,setListRestaurants] = useState([]);
  const[reviewsList,setListReviews] = useState([]);
  const[usersList,setListUsers] = useState([]);
  const[indexItem,setIndexItem] = useState(0);
  const[item,setSearchItem] = useState('');

  useEffect(() => {
    let newState =store.getState();
    if (newState.restaurants.search === '') {
      getRestaurantsInformation();
    } else {
      if (indexItem === 0) {
        searchItem(newState.restaurants.search)
      }
    }
    getReviewsInformation();
    getUsersInformation();
  }, []);

  const onClick = (index) => {
    setIndexItem(parseInt(index));
    dispatch(setSearch(''));
  }

  const onChange = (item) => {
    if (item == '') {
      getRestaurantsInformation();
      getReviewsInformation();
      getUsersInformation();
    } else {
      setSearchItem(item);
      searchItem(item)
    }
  }

  const searchItem = async (item) => {
    
    const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/search/';

    const method = 'POST'; // method

    let type = '';
    
    switch (indexItem) {
      case 0:
        type = 'restaurants';
        break;
      case 1:
        type = 'reviews';
        break;
      case 2:
        type = 'users';
        break;
    }

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const body = {  // body
      'type': type,
      'search_string': item,
    }

    const config = { // configuration
      method : method,
      body : JSON.stringify(body),
      headers,
    }

    const response = await fetch(url, config);  //fething
    const data     = await response.json();  // getting the user

    switch (indexItem) {
      case 0:
        setListRestaurants(data)
        break;
      case 1:
        setListReviews(data)
        break;
      case 2:
        setListUsers(data)
        break;
    }
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
    setListRestaurants(data)
  }

  const getReviewsInformation = async () => {
    
    const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/all/';

    const method = 'GET'; // method

    const config = { // configuration
      method : method,
    }

    const response = await fetch(url, config);  //fething
    const data     = await response.json();  // getting the user

    dispatch(setReviews(data)) // update reviews list with middleware
    setListReviews(data)
  }

  const getUsersInformation = async () => {
    
    const url = 'https://luna-dhmp.propulsion-learn.ch/backend/api/users/';

    const method = 'GET'; // method

    const config = { // configuration
      method : method,
    }

    const response = await fetch(url, config);  //fething
    const data     = await response.json();  // getting the user

    dispatch(setUsers(data)) // update users list with middleware
    setListUsers(data)
  }

  return (
    <SearchContainer>
      <div id = 'main_header'>
        <MainHeader/>
      </div>
      <div id = 'searchHeader'>
          <SearchSubHeader onChange={e => {onChange(e)}}/>
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
            reviewsList?
              <div id = 'reviews'>
                <ReviewsBody reviewsList={reviewsList}/>
              </div>
            :
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
    </SearchContainer>
  );
}

export default Search;
