import React, { Component } from 'react';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import '../css/App.css';

class App extends Component {

  state = { myName: 'Michael' }


  render() {
    return (
      <main className="page bg-white" id="petratings">
     <div className="container">
       <div className="row">
         <div className="col-md-12 bg-white">
           <div className="container">
            {this.state.myName}
             <AddAppointments />
             <SearchAppointments />
             <ListAppointments />
           </div>
         </div>
       </div>
     </div>
   </main>
    );
  }
}

export default App;
