import {ILocation} from '../';

export interface IUser {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: string
    gender: string;
    email: string;
    dateOfBirth: string;
    registerDate: string;
    phone: string;
    location: ILocation;
}
