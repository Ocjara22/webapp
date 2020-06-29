export class ResponseBrooking {
    bookingId: number;
    bookingPrice: number;
    bookingTime: Date;
    tutenUserClient: Client;
    locationId: Location;
}

class Client {
    firstName: string;
    lastName: string;
}

class Location {
    streetAddress: string;
}