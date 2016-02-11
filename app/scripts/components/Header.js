import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h1 class="text-xs-center text-primary"><Link to="/">Recipe list</Link></h1>
            </div>
        );
    }
}