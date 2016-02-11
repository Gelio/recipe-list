import React from 'react';
import { Link } from 'react-router';
import RecipeAPI from '../utilities/recipeAPI';

export default class RecipeList extends React.Component {
    addNewRecipe() {
        var recipeList = RecipeAPI.getRecipesList(),
            newRecipeID = recipeList.length;
        recipeList.push({
            name: 'Name',
            ingredients: []
        });

        RecipeAPI.saveRecipesList(recipeList);
        this.props.history.push('/recipe/' + newRecipeID + '?editing');
    }

    render() {
        return (
            <div class="container">
                <h2>Recipe list</h2>
                <p>You have {RecipeAPI.getRecipesList().length} recipes saved.</p>
                <ul>
                    {RecipeAPI.getRecipesList().map((recipe, i) => {
                        return (<li key={i}><Link to={"/recipe/" + i}>{recipe.name}</Link></li>);
                    })}
                </ul>

                <button type="button" class="btn btn-primary" onClick={this.addNewRecipe.bind(this)}>Add new recipe</button>
            </div>
        )
    }
}