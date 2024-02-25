import React from "react";

class Bike extends React.Component{
    constructor(props){
        super(props);
        this.state={
            make:"Yamaha",
            model:"R15",
            color:"blue"
        }
    };
    
    changeBikeColor = () => {
        this.setState({color:"black"});
    }

    render(){
        return (
            <div>
                <h2>My {this.state.make}</h2>
                <p>It is a {this.state.color} {this.state.model}.</p>
                <button type="button" onClick={this.changeBikeColor}>Change Color</button>
            </div>
        )
    }

}

export default Bike;