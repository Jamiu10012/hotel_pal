import { API_URL } from "../ProtectedRoute";

export const getUserByEmail = async (email) => {
  try {
    const response = await fetch(`${API_URL}/user/email-get/${email}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};
export const getUserById = async (userId, token) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: token,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Error fetching user data", error);
    throw error;
  }
};
