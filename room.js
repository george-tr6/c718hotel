

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
	checkIfOccupied(){
		var isOccupied = null;
		if(this.occupant){
			isOccupied = true;
		}else {
			isOccupied = false;
		}
		return isOccupied;
	}
}