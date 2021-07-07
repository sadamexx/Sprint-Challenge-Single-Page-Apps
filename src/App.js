import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard";
import SearchForm from "./components/SearchForm";
import {Route} from "react-router-dom";


export default function App() {
  return (
    <main>
      <Header /> 
        <div>
          
          <Route exact path= "/CharacterList" component={CharacterList}/>
          <Route exact path= "/WelcomePage" component={WelcomePage}/>
          <Route exact path = "/CharacterCard" component={CharacterCard}/>
          <Route path ="SearchForm" component={SearchForm}/>
          

        </div>     
    </main>
  );
}
