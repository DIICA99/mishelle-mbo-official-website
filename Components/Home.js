import React, {Component} from 'react';
import Navigation from './Navigation';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Navigation />

                <Header />
            </div>
        );
    }
}

export default Home;