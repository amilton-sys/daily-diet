import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAT_COLLECTION } from "@storage/storageConfig";
export async function meatsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAT_COLLECTION);
    const meats: string[] = storage ? JSON.parse(storage) : [];
    return meats;
  } catch (error) {
    throw error;
  }
}
