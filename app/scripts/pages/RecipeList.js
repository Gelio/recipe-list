import React from 'react';
import { Link } from 'react-router';
import RecipeAPI from '../utilities/recipeAPI';

export default class RecipeList extends React.Component {
    render() {
        console.log(RecipeAPI.getRecipesList());
        return (
            <div class="container">
                <h2>Recipe list</h2>
                <p>You have {RecipeAPI.getRecipesList().length} recipes saved.</p>
                <ul>
                    {RecipeAPI.getRecipesList().map((recipe, i) => {
                        return (<li key={i}><Link to={"/recipe/" + i}>{recipe.name}</Link></li>);
                    })}
                </ul>
            </div>
        )
    }
}