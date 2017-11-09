var hotel = { name: "Planet Hollywood",
    totalRooms: 1600,
    roomsBooked: 1500,
    roomsAvail: 100
}

    function elButton() {
    document.getElementById("hotelname").innerHTML = hotel.name;
    document.getElementById("rooms").innerHTML = hotel.totalRooms;
    document.getElementById("roomsavail").innerHTML = hotel.totalRooms - hotel.roomsBooked;
}

