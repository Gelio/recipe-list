import React from 'react';
import { Link } from 'react-router';


import RecipeAPI from '../utilities/recipeAPI';
import RecipeError from '../components/RecipeError';
import RecipeEditForm from '../components/RecipeEditForm';

export default class RecipePage extends React.Component {
    constructor() {
        super();

        this.state = {
            recipeID: 0,
            recipe: {name: '', ingredients: []},
            editing: false
        };
    }

    componentDidMount() {
        const recipeID = this.props.params.recipeID,
            recipe = RecipeAPI.getRecipeByID(recipeID);

        this.setState({
            recipeID: recipeID,
            recipe: recipe,
            editing: false
        });
    }

    beginEditingRecipe() {
        this.setState({
            editing: true
        });
    }

    deleteRecipe() {
        RecipeAPI.deleteRecipeByID(this.state.recipeID);
        this.props.history.push('/');
    }

    saveRecipe() {
        // Delete empty ingredients
        var parsedRecipe = this.state.recipe;
        parsedRecipe.ingredients = parsedRecipe.ingredients.filter((ingredient) => {
            return (ingredient && ingredient.length > 0);
        });

        if(parsedRecipe.name.length === 0) {
            // Name needs to be passed in
            return;
        }

        RecipeAPI.saveRecipeByID(this.state.recipeID, parsedRecipe);
        this.setState({
            editing: false
        });
    }

    acceptChanges(newRecipe) {
        this.setState({
            recipe: newRecipe
        });
    }

    discardChanges() {
        // Load recipe back (call component did mount actually)
        this.componentDidMount();
    }

    render() {
        if(!this.state.recipe)
            return (<RecipeError />);
        else if(this.state.editing)
            return <RecipeEditForm recipe={this.state.recipe} acceptChanges={this.acceptChanges.bind(this)} saveRecipe={this.saveRecipe.bind(this)} discardChanges={this.discardChanges.bind(this)} />;
        else
            return (
                <div>
                    <h2 class="text-secondary">{this.state.recipe.name}</h2>

                    <p>Ingredients:</p>
                    <ul>
                        {this.state.recipe.ingredients.map((ingredient, i) => {
                            return (<li key={i}>{ingredient}</li>);
                        })}
                    </ul>

                    <div class="m-t-3">
                        <button type="button" class="btn btn-primary m-r-1" onClick={this.beginEditingRecipe.bind(this)}>Edit</button>
                        <button type="button" class="btn btn-danger" onClick={this.deleteRecipe.bind(this)}>Delete</button>
                    </div>
                </div>
            );
    }
}