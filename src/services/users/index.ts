import {IUsersResponse} from "../../interfaces";
import {client, ServiceError} from "../index";

export async function getUsers(page: number): Promise<IUsersResponse> {
    const res = await client.request({
        url: "user?limit=10&page="+ page,
        method: "GET"
    })

    if(res === undefined || !(res.status >= 200 && res.status < 300)) {
        let error: ServiceError ;
        if(res !== undefined) {
            error = {
                endpoint: "user?limit=10&page="+ page,
                message: res.data?.message || "Not specified.",
                status: res.status
            }
        } else {
            error = {
                endpoint: "user?limit=10&page="+ page,
                message: "Not specified.",
                status: 0
            }
        }

        return Promise.reject(error);
    }

    return res.data as IUsersResponse;
}