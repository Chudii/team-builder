//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [teamMembers, setTeamMember] = useState([
    { id: 1, name: 'Greg', email: 'gregwolfe@yahoo.com', role: 'Aircraft Technician'},
    { id: 2, name: 'Simmeon', email: 'simmeonbailey@gmail.com', role: 'Graphical Designer'},
    { id: 3, name: 'Joshua', email: 'joshbenson@aol.com', role: 'Assistant Production Manager'}
  ]);


  
  

  return (
    <div className="App">
      <div className="Member List">
        {teamMembers.map(member => {
          return (
              <h3 key={member.id}>
                Name: {member.name}
                <br/>
                Email: {member.email}
                <br/>
                {member.role}
              </h3>
          )
        })}

        {/* <Form list={teamMembersList}/> */}
      </div>
    </div>
  );
}

export default App;
