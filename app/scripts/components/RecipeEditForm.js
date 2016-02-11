import React from 'react';

import IngredientEdit from './IngredientEdit';

export default class RecipeEditForm extends React.Component {
    changeRecipeName(e) {
        this.props.acceptChanges({
            name: e.target.value,
            ingredients: this.props.recipe.ingredients
        });
    }

    changeIngredient(ingredient, i) {
        var ingredients = this.props.recipe.ingredients;
        ingredients[i] = ingredient;

        this.props.acceptChanges({
            name: this.props.recipe.name,
            ingredients: ingredients
        });
    }

    addNewIngredient() {
        var ingredients = this.props.recipe.ingredients;
        ingredients.push('');


        this.props.acceptChanges({
            name: this.props.recipe.name,
            ingredients: ingredients
        });
    }

    deleteIngredient(i) {
        var ingredients = this.props.recipe.ingredients;
        ingredients.splice(i, 1);

        this.props.acceptChanges({
            name: this.props.recipe.name,
            ingredients: ingredients
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.recipe.name} onChange={this.changeRecipeName.bind(this)} />

                <p>Ingredients:</p>
                <ul>
                    {this.props.recipe.ingredients.map((ingredient, i) => {
                        return (<li key={i}><IngredientEdit changeIngredient={this.changeIngredient.bind(this)} deleteIngredient={this.deleteIngredient.bind(this, i)} ingredient={ingredient} index={i} /></li>);
                    })}
                </ul>
                <button type="button" class="btn btn-secondary" onClick={this.addNewIngredient.bind(this)}>Add new ingredient</button>

                <div class="m-t-3">
                    <button type="button" class="btn btn-success m-r-1" onClick={this.props.saveRecipe}>Save</button>
                    <button type="button" class="btn btn-warning" onClick={this.props.discardChanges}>Discard changes</button>
                </div>
            </div>
        );
    }
}