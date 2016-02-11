// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// App dependencies
import App from './components/App';
import RecipeList from './pages/RecipeList';
import RecipePage from './pages/RecipePage';

class Layout extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={RecipeList} />
                    <Route path="/recipe/:recipeID" component={RecipePage} />
                </Route>
            </Router>
        )
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));