import {IEntries} from "../pages/Entries/Entries";
import {IUserInfo} from "../services/userAuthService";

export const drawerWidth = 250;
export const computersGetAddress = "http://26.213.25.20:4001/api/computer";
export const clubusersGetAddress = "http://26.213.25.20:4001/api/clubuser/all-users";
export const userEntriesGetAddress = "http://26.213.25.20:4001/api/entry/user-entries";
export const allEntriesGetAddress = "http://26.213.25.20:4001/api/entry/all-entries";
export const entriesByComputerGetAddress = "http://26.213.25.20:4001/api/entry/entry-by-computer/";
export const createEntryAddress = "http://26.213.25.20:4001/api/entry/create-entry";
export const userDeleteEntryAddress = "http://26.213.25.20:4001/api/entry/delete-for-current-user?entryId=";
export const adminDeleteEntryAddress = "http://26.213.25.20:4001/api/entry/delete-any-user-entry?entryId=";

export interface IIconProps {
  height?: number;
  width?: number;
};

export const defaultUser: IUserInfo = {
  email: '',
  firstName: '',
  password: '',
  phoneNumber: '',
  secondName: '',
}
export const defaultUserString = JSON.stringify(defaultUser);

export const defaultUsers: IUserInfo[] = [defaultUser];

export const defaultUsersString = JSON.stringify(defaultUsers.map((val) => JSON.stringify(val)));

export const defaultEntries: IEntries[] = [{
  id: ' ',
  date: '',
  time: '',
  user: '',
  idComp: ''
}];

export const defaultEntriesString = JSON.stringify(defaultEntries.map(val => JSON.stringify(val)))

export type IPermission = 'User' | 'Admin' | undefined
