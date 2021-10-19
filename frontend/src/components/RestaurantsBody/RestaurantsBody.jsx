// import React from "react";

// class BodyData extends React.Component {
//     state = {
//       query: "",
//       data: [],
//       filteredData: []
//     };
  
//     handleSearch = event => {
//       const query = event.target.value;
  
//       this.setState(prevState => {
//         const filteredData = prevState.data.filter(element => {
//           return element.name.toLowerCase().includes(query.toLowerCase());
//         });
  
//         return {
//           query,
//           filteredData
//         };
//       });
//     };
  
//     getData = () => {
//       fetch(`http://luna-dhmp/api/restaurants/`) //input correct URL here 
//         .then(response => response.json())
//         .then(data => {
//           const { query } = this.state;
//           const filteredData = data.filter(element => {
//             return element.name.toLowerCase().includes(query.toLowerCase());
//           });
  
//           this.setState({
//             data,
//             filteredData
//           });
//         });
//     };
  
//     componentWillMount() {
//       this.getData();
//     }
// }

// export default BodyData;