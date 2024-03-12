import { server } from './mockServer'

export const getGroups = async () => {
  try {
    const groups = await server.getGroups();
    if (groups.data) {
      return groups.data;
    } else return [] 
  } catch (e) {
    console.error(e);
  }
} 