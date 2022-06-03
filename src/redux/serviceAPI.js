const BASE_URL = "http://localhost:3001/api/v1"

/**
 * add token to storage for remembering user after navigation is closed
 * @param {*} token 
 */
 export const setToken = (token) => {
    localStorage.setItem("token", token)
}

/**
 * get token from storage
 */
 export const getToken = () => {
    localStorage.getItem("token")
}

/**
 * API post call to get login token
 * @param {String} login 
 * @param {String} password 
 * @param {Boolean} rememberMe 
 * @returns {Object}
 */
export const logInUser = (login, password, rememberMe) => {
    return async() => {
        try {
            const res = await fetch(`${BASE_URL}/user/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                body: JSON.stringify({
                    email: login,
                    password: password
                })
            })
            const data = await res.json()
            const token = data.body.token
            if(rememberMe) {
                setToken(token)
                localStorage.setItem("username", login)
                localStorage.setItem("pass", password)
            }
            return token
        } catch(err) {
            console.error("err", err)
        }
    }
}   