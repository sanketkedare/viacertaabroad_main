export const storeCredentials = (user) => {
    if (user) {
      localStorage.setItem("viacerta-user", JSON.stringify(user));
    }
  };
