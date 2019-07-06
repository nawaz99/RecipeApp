import React, { useState,useEffect } from 'react';
import Form from './components/Form';
import './App.css';
import Recipes from './components/Recipes';
function App() {

const [recipes, setRecipies] = useState([]);

  const getRecipie = async (e)=>{
    e.preventDefault();
    const recipieName = e.target.elements.recipeName.value;    
const API_KEY = '4d786cda054328a42d346030e607139e';
const request = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipieName}&count=10`;
  
const apicall = await fetch(request);
  const data = await apicall.json();
  setRecipies(data.recipes);
  
  } 


const componentupdated = () => {
    const recipess = JSON.stringify(recipes);
    localStorage.setItem('recipes',recipess)
  }

  const componetDidmount = () =>{
    const json  = localStorage.getItem('recipes');
    const recipess = JSON.parse(json);
    setRecipies(recipess);
    }
    

useEffect(
  componetDidmount,
  componentupdated,
[recipes]
)
  
  

  return (
  <div className={'App'}> 
  <header className={'App-header'}>
  <h1 className={'App-title'}>Recipe Search</h1>
 </header>  
 <Form getRecipie={getRecipie}/>
<Recipes recipes={recipes}/>
  </div>
  );
}

export default App;
