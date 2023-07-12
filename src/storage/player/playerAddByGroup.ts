import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "./PlayersGetByGroup";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStoreDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPlayer: PlayerStoreDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Player já faz parte de um time.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
