import React, { Component } from 'react';

class Welcome extends Component {
    render(props) {
        return <div>
            <h1> Class based Component - {this.props.name} a.k.a {this.props.heroName} </h1> 
            {this.props.children}
        </div>
    }
}

export default Welcome;