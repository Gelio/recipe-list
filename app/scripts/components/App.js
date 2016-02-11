import React from 'react';
import Header from './Header';


export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <div class=" m-t-1">
                    {this.props.children}
                </div>
            </div>
        );
    }
}