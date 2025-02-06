import { child, get, getDatabase, set, ref } from "firebase/database";

export const fetchData = async (endpoint) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, endpoint));
    if (snapshot.exists()) return snapshot.val();
    else {
      console.log("No data available in the endpoint " + endpoint);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const updateData = async (endpoint, data) => {
  try {
    const db = getDatabase();
    set(ref(db, endpoint), data);
    console.log("Data updated successfully");
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};
