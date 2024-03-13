export const getLocalStorageJWT = () => {
  try {
    const value = window.localStorage.getItem("JWT");
    //  alert(value);
    if (value != null) {
      return value;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
    return "";
  }
};

export const setLocalStorageJWT = (token) => {
  try {
    window.localStorage.setItem("JWT", token);
  } catch (error) {
    console.log(error);
  }
};

export const clearStorageJWT = () => {
  try {
    window.localStorage.clear();
    //window.location.href = "../inicio/";
  } catch (error) {
    console.log(error);
  }
};

export const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = (key) => {
  try {
    const value = window.localStorage.getItem(key);
    //  alert(value);
    if (value != null) {
      return value;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
    return "";
  }
};
