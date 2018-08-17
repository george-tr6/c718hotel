

class Hotel{
	constructor(){
		this.name = 'marriot';
		this.rooms = [];
		this.staff = [];
	}
	//make a customer object with the given name and add to a room.  need to add to a room with no occupants
	checkInCustomer( name ){
		var customer = new Customer(name);
		this.rooms[0].addOccupant( customer );
	}

	checkOutCustomer(){

	}
	//make a room and add to rooms array
	addRoom() {
        var newRoom = new Room(this);
        this.rooms.push(newRoom);
    }
	//add staff to the hotelmarr
	hireStaff( name ) {

	}
	getVacantRooms(){

	}
	getKitchenService(){
		
	}

}