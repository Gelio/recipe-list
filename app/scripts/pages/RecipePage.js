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
        console.log('editing');
        this.setState({
            editing: true
        });
    }

    deleteRecipe() {
        console.log('deleting');
        // Call api to delete
        // Redirect to the main page
    }

    saveRecipe(newRecipe) {

    }

    acceptChanges(newRecipe) {
        console.log('new state', newRecipe);
        this.setState({
            recipe: newRecipe
        });
        console.log(this.state);
    }

    discardChanges() {
        // Load recipe back (call component did mount actually)
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