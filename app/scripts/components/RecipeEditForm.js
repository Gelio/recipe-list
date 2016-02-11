import React from 'react';

export default class RecipeEditForm extends React.Component {
    constructor() {
        super();

        this.state = {
            recipe: {
                name: '',
                ingredients: []
            }
        };
    }

    componentDidMount() {
        this.setState({
            recipe: this.props.recipe
        });
    }

    changeRecipeName(e) {
        console.log(e);
        this.props.acceptChanges({
            name: e.target.value,
            ingredients: this.state.recipe.ingredients
        });
    }

    saveRecipe() {
        // Call parent function
    }

    discardChanges() {
        // Call parent function
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.recipe.name} onChange={this.changeRecipeName.bind(this)} />

                <p>Ingredients:</p>
                <ul>
                    {this.state.recipe.ingredients.map((ingredient, i) => {
                        return (<li key={i}>{ingredient}</li>);
                    })}
                </ul>

                <div class="m-t-3">
                    <button type="button" class="btn btn-success m-r-1" onClick={this.saveRecipe.bind(this)}>Save</button>
                    <button type="button" class="btn btn-warning" onClick={this.discardChanges.bind(this)}>Discard changes</button>
                </div>
            </div>
        );
    }
}