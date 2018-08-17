

class Room{
	constructor(currentHotel){
		this.occupant = null; //a customer
		this.hotel = currentHotel;
	}
	addOccupant( customer ){
		this.occupant = customer;
	}

	removeOccupant(){

	}
	getRoomService(food){
		this.hotel.getKitchenService();
	}
}