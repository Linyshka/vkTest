import groups from "../constants/groups.json";
import { GetGroupsResponse } from '../constants/types';

export const server = {
  getGroups(): Promise<GetGroupsResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: 1,
          data: groups
        });
      }, 1000)
    })
  }
}