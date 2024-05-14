import AsyncStorage from "@react-native-async-storage/async-storage";
import { meatsGetAll } from "./meatsGetAll";
import { AppError } from "@utils/AppError";
import { MEAT_COLLECTION } from "@storage/storageConfig";

export async function meatCreate(newMeat: any) {
  try {
    const storageMeats = await meatsGetAll();
    const meatAlreadyExists = storageMeats.includes(newMeat);
    if (meatAlreadyExists) {
      throw new AppError("Essa refeição já existe.");
    }

    const storage = JSON.stringify([...storageMeats, newMeat]);
    await AsyncStorage.setItem(MEAT_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
