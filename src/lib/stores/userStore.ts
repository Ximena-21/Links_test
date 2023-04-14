import { create } from "zustand";
import { ILoginForm } from "../../views/login";
import { apiFetch } from "../helpers";
import { ISignUpForm } from "../../views/signup";

interface IUser {
  id: number
  name: string
  email: string
  password: string
  image: string
}

interface IUserStore {
  user: {
    data: IUser,
    token: string
  }
  alert: string
  signInUser: (data: ISignUpForm, callback: () => void) => void
  loginUser: (data: ILoginForm) => void
  logOut: () => void
  setAlert: (message: string) => void 
}

const signInUser = (set: any, get: any) => async (data: ISignUpForm, callback: () => void) => {

  const response = await apiFetch({method: "POST", url: "/auth/singin", body: data})

  if(response.error){
    return alert(response.error)
  }

  if(typeof callback === "function") callback()

};

const loginUser = (set: any, get: () => IUserStore) => async (data: ILoginForm) => {

  const setAlert = get().setAlert
  const response = await apiFetch({method: "POST", url: "/auth/login", body: data})

  if (response.message === "success") {
    const user = { data: response.data, token: response.token };
    localStorage.setItem("user", JSON.stringify(user));
    set({ user: user });
  } else {
    setAlert(response.message)
    console.log("no hay usuario para loguear", response);
  }
};

const logOut = (set: any, get: any) => () => {
  localStorage.removeItem("user")
  set({user: {}})
}

const setAlert = (set: any, get: any) => (message: string) => {

  set({alert: message})
}

export const useUserStore = create<IUserStore>((set, get) => ({
  alert: "",
  user: JSON.parse(localStorage.getItem("user") || "{}"),
  signInUser: signInUser(set, get),
  loginUser: loginUser(set, get),
  logOut: logOut(set,get),
  setAlert: setAlert(set,get)
}));
