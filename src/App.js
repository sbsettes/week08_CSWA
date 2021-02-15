import React, { Component } from 'react';
import RoomForm from './RoomForm';
import AllRoom from './AllRoom';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="navbar">
                    <h2 className="center ">Room Management</h2>
                </div>
                <RoomForm />
                <AllRoom />
            </div>
        );
    }
}
export default App;