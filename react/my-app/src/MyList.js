import React , {Component} from 'react';

export default class MyList extends Component{
    constructor(){
        super();
        this.onClick = this.onClick.bind(this);

    }

    onClick(id){
        const {name} = this.props.items.find(i => i.id === id);
        console.log('clicked', `"${name}"`);
    }

    render(){
        return (
        <ul>
            {/*Creates a new handler function with the bound "id" argument. Notice that the context
            is left as null since that has already been bound in the constructor.*/}
            {this.props.items.map(({id, name}) => (
                <li key={id} onClick={this.onClick.bind(null, id)}>{name}</li>
            ))}
        </ul>
        )
    };
}