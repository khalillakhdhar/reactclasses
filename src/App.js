import logo from './logo.svg';
import './App.css';
import React from 'react';
import Headers from './components/headers';
import Content from './components/content';
class App extends React.Component {
  render() {
    return (
      < >
       <Headers></Headers>
       <Content></Content>
      </>
    );
  }
  
}

export default App;
