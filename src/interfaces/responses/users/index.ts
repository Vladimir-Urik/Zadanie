import {IUserPreview} from "../../user-preview";

export interface IUsersResponse {
    data: IUserPreview[],
    total: number,
    page: number,
    limit: number
}