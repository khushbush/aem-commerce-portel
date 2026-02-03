import api from "./api";

export const loginUser = async (email, password) => {
  const response = await api.get(
    `/users?email=${email}&password=${password}`
  );

    if(response.data.length === 0){
        throw new Error ("Invalid credentials");
    }

    return response.data[0];
};