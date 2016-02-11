import React from 'react';
import { Link } from 'react-router';

export default class RecipeError extends React.Component {
    render() {
        return (
            <div class="alert alert-danger">
                There's been an error and your recipe can't be fetched. Please return to the <Link to="/">main page</Link> and try again.
            </div>
        );
    }
}