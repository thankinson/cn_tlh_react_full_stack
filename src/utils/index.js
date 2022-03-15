export const createUser = async (username, email, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const login = async (username, password, setter) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await response.json();
        setter(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error);
    }
};

export const tokenLogin = async (setter) => {
    try {
            const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
                method: "GET",
                headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            const data = await response.json();
            setter(data.user);
    } catch (error) {
        console.log(error)
    }
};

export const gTfO = () => {
    localStorage.clear();
    window.location.reload(false);
  
};