import axios from "axios";

export const setRegisterUser = (user) => {
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        process.env.REACT_APP_API_KEY,
      { ...user, returnSecureToken: true }
    )
    .then((response) =>
      localStorage.setItem(
        "auth",
        JSON.stringify({
          token: response.data.idToken,
          refreshToken: response.data.refreshToken,
        })
      )
    );
};
