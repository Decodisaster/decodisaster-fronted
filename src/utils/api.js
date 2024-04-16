import axios from "axios";
async function loginUser(email, password) {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export { loginUser };
