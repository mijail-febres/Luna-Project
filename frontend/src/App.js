import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Restaurant from "./Pages/Restaurant";
import Review from "./Pages/Review";
import NewRestaurant from "./Pages/NewRestaurant";
import UserProfile from "./Pages/UserProfile";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import UsersBody from "./components/UsersBody/UsersBody";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import NavigationSubheader from "./components/NavigationSubheader/NavigationSubheader";

const App = () => {
  return (
    <BrowserRouter>            
      {/* <NavigationSubheader></NavigationSubheader> */}
      {/* <ReviewForm id_restaurant='2'></ReviewForm> */}
      {/* <UsersBody></UsersBody> */}
      {/* <ReviewPreview 
        user_name='Laurent H.' 
        user_nReviews='6' 
        restaurant_name='Colinz Bar' 
        contentReview="Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell"
        likes = "5"
        comments = "10"
        >

      </ReviewPreview> */}
    <Route exact path="/restaurant" component={Restaurant} />
    {/* <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/restaurant" component={Restaurant} />
    <Route exact path="/review" component={Review} />
    <Route exact path="/newrestaurant" component={NewRestaurant} />
    <Route exact path="/profile/:username" component={UserProfile} />
    <Route exact path="/registration" component={Registration} />
    <Route exact path="/login" component={Login} /> */}
    </BrowserRouter>
  );
};

export default App;
