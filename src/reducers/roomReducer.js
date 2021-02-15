import axios from 'axios';
const roomReducer = (state = [], action) => {
    const baseURL_rooms = "https://mht.uzi.uni-halle.de/client-seitige-web-anwendungen/api/218102985/rooms"
    switch (action.type) {
        case 'ADD_ROOM':
            delete action.data["editing"]
            delete action.data["id"]
            axios.post(baseURL_rooms, action.data)
            .then(response => state.concat([response.data]));
            return state
        case 'DELETE_ROOM':
            return state.filter((room) => room.id !== action.id)
        case 'EDIT_ROOM':
            return state.map((room) => room.id === action.id ? { ...room, editing: !room.editing } : room)
        case 'UPDATE':
            return state.map((room) => {
                if (room.id === action.id) {
                    return {
                        ...room,
                        roomname: action.data.newRoomname,
                        address: action.data.newAddress,
                        capacity: action.data.newCapacity,
                        features: action.data.newFeatures,
                        editing: !room.editing
                    }
                } else return room;
            })
        default:
            return state;
    }
}
export default roomReducer;