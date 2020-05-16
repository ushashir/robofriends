import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [], 
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots: users}));
    }
    
    onsearchChange=(event)=> {
        this.setState({searchField: event.target.value})
    }
    
    render () {
        const filteredRobots=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
           
        })
        if (this.state.robots.lenght === 0){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1>ROBOT FRIENDS</h1>
                    <SearchBox searchChange={this.onsearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
        }  
    }
}

        

export default App;
