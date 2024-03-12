import { server } from './mockServer'

export const getGroups = async (color = "", privacy = "", friends = "") => {
  try {
    const groups = await server.getGroups(color, privacy, friends);
    if (groups.result) {
      return groups.data;
    }
    return []
  } catch (e) {
    console.error(e);
  }
  return [];
} 

export const getColors = async () => {
  try {
    const colors = await server.getColors();
    return colors.data;
  } catch (e) {
    console.error(e);
  }
  return []
}