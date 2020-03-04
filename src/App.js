import React from 'react';
import './App.css';
import PersonCard from './components/person_card';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Zach" lastName="Wick" age={19} hairColor={"brown"}/>
      <PersonCard firstName="Meg" lastName="Nielson" age={29} hairColor="black"/>
      <PersonCard firstName="Kevin" lastName="Bluth" age={24} hairColor="brown"/>
      <PersonCard firstName="Rosa" lastName="G" age={24} hairColor="blonde"/>
    </div>
  );
}

export default App;
