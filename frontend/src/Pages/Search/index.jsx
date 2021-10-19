import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader"
import MainFooter from "../../components/MainFooter/MainFooter"
import SearchSubHeader from "../../components/SearchSubheader/SearchSubheader"


function Search() {
  return (
    <>
    <MainHeader/>
    <SearchSubHeader/>
    {/* <div> {this.state.filteredData.map(i => <p>{i.name}</p>)} </div>  */}
    <MainFooter/>
    </>
  );
}
// add similar logic for category filter (input instead of dropdown)
export default Search;
