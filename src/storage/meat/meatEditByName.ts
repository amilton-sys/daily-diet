import AsyncStorage from "@react-native-async-storage/async-storage";
import { meatsGetAll } from "./meatsGetAll";
import { MEAT_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export async function MeatEditByName(meatFind: string, newData: any) {
  try {
    const jsonValue = await AsyncStorage.getItem(MEAT_COLLECTION);
    if (jsonValue === null) {
      throw new AppError("Nenhum dado encontrado.");
    }

    const currentData = JSON.parse(jsonValue);

    const index = currentData.findIndex((meat: any) => meat.name === meatFind);
    if (index === -1) {
      throw new AppError("Refeição não encontrada.");
    }

    currentData[index] = newData;

    await AsyncStorage.setItem(MEAT_COLLECTION, JSON.stringify(currentData));
  } catch (error) {
    throw error;
  }
}
