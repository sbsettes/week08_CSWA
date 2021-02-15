
import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newRoomname = this.roomname.value;
        const newAddress = this.address.value;
        const newCapacity = this.capacity.value;
        const newFeatures = this.features.value;
        const data = {
            newRoomname,
            newAddress,
            newCapacity,
            newFeatures
        }
        this.props.dispatch({ type: 'UPDATE', id: this.props.room.id, data: data })
    }
    render() {
        return (
            <div key={this.props.room.id} className="room">
                <form className="form" onSubmit={this.handleEdit}>
                    <input required type="text" ref={(input) => this.roomname = input}
                        defaultValue={this.props.room.roomname} placeholder="Enter Room Name" /><br /><br />
                    <input required type="text" ref={(input) => this.address = input}
                        defaultValue={this.props.room.address} placeholder="Enter Room address" /><br /><br />
                    <input required type="text" ref={(input) => this.capacity = input}
                        defaultValue={this.props.room.capacity} placeholder="Enter Room capacity" /><br /><br />
                    <input required type="text" ref={(input) => this.features = input}
                        defaultValue={this.props.room.features} placeholder="Enter Room features" /><br /><br />
                    <button>Update</button>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);