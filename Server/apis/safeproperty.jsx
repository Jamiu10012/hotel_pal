import { API_URL } from "../ProtectedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const SaveProperty = async (PropData, token, successMessage) => {
//   try {
//     const response = await fetch(`${API_URL}/savedProperty`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token,
//       },
//       body: JSON.stringify(PropData),
//     });
//     if (!response.ok) {
//       const errorData = await response.json(); // Assuming the server sends error details in JSON format
//       throw new Error(errorData.message); // Adjust this based on the actual structure of the error response
//     }

//     const data = await response.json();
//     toast.success(successMessage);
//     return data;
//   } catch (error) {
//     console.error("Error listing user:", error);
//     toast.error(error);
//     // toast.error("", error);
//     throw error;
//   }
// };
// export const getSavedByUserIdAndPropId = async (userId, propId, token) => {
//   try {
//     const response = await fetch(
//       `${API_URL}/savedProperty/${userId}/${propId}`,
//       {
//         headers: {
//           Authorization: token,
//         },
//       }
//     );

//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error("Failed to fetch property data");
//     }
//   } catch (error) {
//     console.error("Error fetching property data", error);
//     throw error;
//   }
// };
