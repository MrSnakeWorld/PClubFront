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

export type IPermission = 'User' | 'Admin' | undefined
