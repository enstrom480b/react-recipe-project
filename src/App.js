import './App.css';
import React ,{useEffect,useState} from 'react'
import Recipe from './Recipe';
function App() {
const APP_ID='97a75b7c'
const APP_KEY='cc0837cc479c3d482a6b3da62265e90b'
let [recipes,setrecipes]=useState([])
const [search,setsearch]=useState('')
const [query,setquery]=useState('chicken')
useEffect(()=>{
getfetch()
},[query])

const getfetch=async()=>{
const req=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
const data=await req.json()
setrecipes(data.hits)
}
const updatesearch=(e)=>{
setsearch(e.target.value)

}
const getsearch=e=>{
e.preventDefault()
setquery(search)
}
  return (
  <div className="container">
  <Recipe/>
   <form className="search-form" onSubmit={getsearch}>
   <input type="text"className="search-bar"  onChange={updatesearch} />
   <button type="submit" className="search-button">search</button>
   </form>{recipes.map(recipe=>(<Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} images={recipe.recipe.image}/>))}
    </div>
  ); 
}

export default App;
