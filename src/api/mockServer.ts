import groups from "../constants/groups.json";
import { GetColorsResponse, GetGroupsResponse } from '../constants/types';

const createColorArray = (): string[] => {
  const coloredGroups = groups.filter((group) => group.avatar_color);
  const colors = new Set(coloredGroups.map((group) => group.avatar_color) as string[]);
  return ["Все", "Нет", ...colors];
}

const filtersGroup = (color: string, privacy: string, friends: string) => {
  const all = "Все";
  if (color === all && privacy === all && friends === all) {
    return groups;
  }
  
  if (color === all && privacy === all && friends !== all) {
    return friends === "Есть" ? groups.filter((group) => group.friends) : groups.filter((group) => !group.friends)
  } 
  
  if (color === all && friends === all && privacy !== all) {
    return privacy === "Открытая" ? groups.filter((group) => !group.closed) : groups.filter((group) => group.closed)
  } 
  
  if (friends === all && privacy === all && color !== all) {
    return color !== "Нет" ? groups.filter((group) => group.avatar_color === color): groups.filter((group) => !group.avatar_color);
  }
  
  if (color === all && friends !== all && privacy !== all) {
    if (friends === "Есть" && privacy === "Открытая") {
      return groups.filter((group) => !group.closed && group.friends);
    } 
    if (friends === "Есть" && privacy === "Закрытая") {
      return groups.filter((group) => group.closed && group.friends);
    } 
    if (friends === "Нет" && privacy === "Открытая") {
      return groups.filter((group) => !group.closed && !group.friends);
    } 

    return groups.filter((group) => group.closed && !group.friends);
  } 
  
  if (color !== all && friends === all && privacy !== all) {
    if (color === "Нет") {
      return privacy === "Открытая" ? 
      groups.filter((group) => !group.closed && !group.avatar_color) 
      : groups.filter((group) => group.closed && !group.avatar_color)
    }
    return privacy === "Открытая" ? 
      groups.filter((group) => !group.closed && group.avatar_color === color) 
      : groups.filter((group) => group.closed && group.avatar_color === color) 
  } 
  
  if (color !== all && friends !== all && privacy === all) {
    if (color === "Нет") {
      return friends === "Есть" ? 
      groups.filter((group) => group.friends && !group.avatar_color) 
      : groups.filter((group) => !group.friends && !group.avatar_color)
    }
    return friends === "Есть" ? 
      groups.filter((group) => group.friends && group.avatar_color === color) 
      : groups.filter((group) => !group.friends && group.avatar_color === color)
  } 

  if (friends === "Есть" && privacy === "Открытая") {
    return color === "Нет" ? 
      groups.filter((group) => !group.closed && group.friends && !group.avatar_color) :
      groups.filter((group) => !group.closed && group.friends && group.avatar_color === color);
  }

  if (friends === "Есть" && privacy === "Закрытая") {
    return color === "Нет" ?
    groups.filter((group) => group.closed && group.friends && !group.avatar_color) :
    groups.filter((group) => group.closed && group.friends && group.avatar_color === color);
  } 
  
  if (friends === "Нет" && privacy === "Открытая") {
    return color === "Нет" ?
      groups.filter((group) => !group.closed && !group.friends && !group.avatar_color) :
      groups.filter((group) => !group.closed && !group.friends && group.avatar_color === color);
    } 

  return color === "Нет" ? 
  groups.filter((group) => group.closed && !group.friends && group.avatar_color === color) :
  groups.filter((group) => group.closed && !group.friends && group.avatar_color === color);
}

export const server = {
  getGroups(color: string, privacy: string, friends: string): Promise<GetGroupsResponse> {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: 1,
          data: filtersGroup(color, privacy, friends)
        });
      }, 1000)
    })
  },
  getColors(): Promise<GetColorsResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          result: 1,
          data: createColorArray()
        });
      }, 1000)
    })
  }
}