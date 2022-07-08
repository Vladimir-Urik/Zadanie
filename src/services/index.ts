import axios from "axios";

export const client = axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: {
        "app-id": process.env.REACT_APP_ID
    },
    responseType: "json"
});

export interface ServiceError {
    endpoint: string;
    message: string;
    status: number;
}