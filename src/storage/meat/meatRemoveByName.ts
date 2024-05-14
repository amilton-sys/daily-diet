import AsyncStorage from "@react-native-async-storage/async-storage";
import { meatsGetAll } from "./meatsGetAll";
import { AppError } from "@utils/AppError";
import { MEAT_COLLECTION } from "@storage/storageConfig";

export async function meatRemoveByName(meatDeleted: string) {
  try {
    const storedMeats = await meatsGetAll();
    const filtered = storedMeats.filter((meat) => meat.name !== meatDeleted);
    const meats = JSON.stringify(filtered);
    await AsyncStorage.setItem(MEAT_COLLECTION, meats);
  } catch (error) {
    throw error;
  }
}
