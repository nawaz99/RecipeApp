import React , { Component }from 'react';
import { Link } from 'react-router-dom';


class Recipe extends Component{
    state  = {
        activeRecipe:[]
    };
    
    componentDidMount = async () =>{
        const title = this.props.location.state.recipe;   
        const API_KEY = '4d786cda054328a42d346030e607139e';
        const API_CALL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`
        const req = await fetch(API_CALL);
        const res = await req.json();
     
        this.setState({activeRecipe:res.recipes[0]});
        console.log(this.state.activeRecipe);
      
    }
    

render(){
    const recipe = this.state.activeRecipe;
    return(
    <div className={'container'}>
    {recipe.length !==0 && <div className={'active-recipe'}>
            <img className={'active-recipe__img'} src={recipe.image_url} alt={recipe.title}/>
            <h3 className={'active-recipe__title'}>{recipe.title}</h3>
            <h4 className={'active-recipe__publisher'}>
            Publisher:<span>{recipe.publisher}</span></h4>
            <p className={'active-recipe__website'}>
            Website:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
            <button className={'active-recipe__button'}><Link to='/'>Go Home</Link></button>
            </div>
            }
    </div>
    )
}
}


export default Recipe;