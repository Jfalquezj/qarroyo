import { post } from "./http";

const loginUser = async (username, password) => {
  const user = {
    username,
    password,
  };
  const json = await post("user/login", user);
  console.log(json)
  return json;
};

const singupUser = async (userInfo) => {
  const json = await post("user/signup", userInfo);
  return json;
};

const logoffUser = () => {
  localStorage.removeItem("user");
};
export { loginUser, singupUser, logoffUser };
