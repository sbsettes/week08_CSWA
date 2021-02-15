import React, { Component } from 'react';
import { connect } from 'react-redux';
class RoomForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const roomname = this.roomname.value;
        const address = this.address.value;
        const capacity = this.capacity.value;
        const features = this.features.value;
        const data = {
            id: new Date(),
            roomname,
            address,
            capacity,
            features,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_ROOM',
            data
        })
        this.roomname.value = '';
        this.address.value = '';
        this.capacity.value = '';
        this.features.value = '';
    }
    render() {
        return (
            <div className="room-container">
                <h1 className="room_heading">Create Room</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.roomname = input}
                        placeholder="Enter Room name" /><br /><br />
                    <input required type="text" ref={(input) => this.address = input}
                        placeholder="Enter Room address" /><br /><br />
                    <input required type="text" ref={(input) => this.capacity = input}
                        placeholder="Enter Room capacity" /><br /><br />
                    <input required type="text" ref={(input) => this.features = input}
                        placeholder="Enter Room features" /><br /><br />
                    <button>Create Room</button>
                </form>
            </div>
        );
    }
}
export default connect()(RoomForm);