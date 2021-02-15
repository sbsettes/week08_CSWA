import React, { Component } from 'react';
import { connect } from 'react-redux';
import Room from './Room';
import EditComponent from './EditComponent';
class AllRoom extends Component {
    render() {
        return (
            <div>
                <h1 className="room_heading">All Rooms</h1>
                {this.props.rooms.map((room) => (
                    <div key={room.id}>
                        {room.editing ? <EditComponent room={room} key={room.id} /> : <Room room={room}
                            key={room.id} />}
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        rooms: state
    }
}
export default connect(mapStateToProps)(AllRoom);