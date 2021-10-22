import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Restaurant from "./Pages/Restaurant";
import Review from "./Pages/Review";
import NewRestaurant from "./Pages/NewRestaurant";
import UserProfile from "./Pages/UserProfile";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/restaurant/:id" component={Restaurant} />
      <Route exact path="/review/:id" component={Review} />
      <Route exact path="/newrestaurant" component={NewRestaurant} />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/login" component={Login} />
    </BrowserRouter>
  );
};

export default App;
