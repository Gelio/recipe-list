import React from 'react';

export default class IngredientEdit extends React.Component {
    changeIngredient(e) {
        this.props.changeIngredient(e.target.value, this.props.index);
    }

    render() {
        return (
            <span>
                <input type="text" value={this.props.ingredient} onChange={this.changeIngredient.bind(this)} /> <button class="btn" onClick={this.props.deleteIngredient}>-</button>
            </span>
        )
    }
}