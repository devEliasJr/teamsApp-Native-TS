import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    //Delete the group
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    //Delete the player
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);

  } catch (error) {
    throw error;
  }
}
