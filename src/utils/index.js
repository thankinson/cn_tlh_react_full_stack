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

export const deleteUser = async (user) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user/username/${user}`, {
            method: "DELETE",
            headers: {"Authorization": `Bearer ${localStorage.getItem("myToken")}`}, });
            localStorage.clear();
            window.location.reload(false);
         await response.json();
    } catch (error) {
        console.log(error);
    }
};

export const gTfO = () => {
    try {
        localStorage.clear();
        window.location.reload(false);
    } catch (error) {
        console.log(error)
    }

};

export const updatePass = async (user, passUpdate) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("myToken")}`,
        },
            body: JSON.stringify({
                username: user,
               password: passUpdate
                })
            });
        const data = await response.JSON()
        if (!data.msg) {
            throw new Error(data.err)
        }
    } catch (error) {
        console.log()
    }
};