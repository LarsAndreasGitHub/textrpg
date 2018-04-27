import * as React from 'react';
import './App.css';
import ArrowButton from "./Component/ArrowButton";

class Home extends React.Component {
  public render() {
    return (
      <div>
          <ArrowButton direction={"up"}/>
      </div>
    );
  }
}

export default Home;
