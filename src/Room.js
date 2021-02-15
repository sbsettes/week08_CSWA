import React, { Component } from 'react';
import { connect } from 'react-redux';
class Room extends Component {
    render() {
        return (
            <div className="room">
                <h2 className="room_title">{this.props.room.roomname}</h2>
                <p className="room_message">{this.props.room.address}</p>
                <p className="room_message">{this.props.room.capacity}</p>
                <p className="room_message">{this.props.room.features}</p>
                <div className="control-buttons">
                    <button className="edit"
                        onClick={() => this.props.dispatch({ type: 'EDIT_ROOM', id: this.props.room.id })
                        }
                    >Edit</button>
                    <button className="delete"
                        onClick={() => this.props.dispatch({ type: 'DELETE_ROOM', id: this.props.room.id })}
                    >Delete</button>
                </div>
            </div>
        );
    }
}
export default connect()(Room);