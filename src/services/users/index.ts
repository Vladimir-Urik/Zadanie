import {createRequest} from '../index';
import {IUsersResponse} from '../../interfaces/responses';
import {IUser} from '../../interfaces/general';

export async function getUsers(page: number): Promise<IUsersResponse> {
  return createRequest<IUsersResponse>({
    url: 'user?limit=10&page='+ page,
    method: 'GET',
  });
}

export async function getUser(id: string): Promise<IUser> {
  return createRequest<IUser>({
    url: 'user/'+ id,
    method: 'GET',
  });
}
