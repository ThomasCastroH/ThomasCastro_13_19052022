const BASE_URL = "http://localhost:3001/api/v1"

/**
 * Call the API to log in the user and get the authorization token
 * @param {String} login 
 * @param {String} password 
 * @returns {Object}
 */
export function logInUser(login, password) {
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

            return token
        } catch(err) {
            console.error("err", err)
        }
    }
}   

/**
 * Call the API and chech the authorization token to get the user's info
 * @param {String} token 
 * @returns {Object}
 */
 export function getUserInfo(token) {  
    return async () => {
        try{
            const res = await fetch(`${BASE_URL}/user/profile`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ` + token
                },
                body: JSON.stringify()
            })
            const data = await res.json()
            const body = data.body
            const email = body.email
            const firstName = body.firstName
            const lastName = body.lastName

            return {email, firstName,lastName}
        } catch (err) {
            console.log('err',err)
        }
    } 
}

/**
 * Call the API and check the authorization token to change user firstname and lastname
 * @param {String} firstName 
 * @param {String} lastName 
 * @param {String} token 
 */
 export function updateUserInfo(firstName, lastName, token) {
    fetch(`${BASE_URL}/user/profile`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer `+ token
        },
        body: JSON.stringify({firstName:firstName, lastName:lastName})
    }).then( async (res) => {
        if(res.ok) {
            let jsonRes =  await res.json()
            console.log("user profile is up to date", jsonRes)

            return res
        }
    }).catch(err => console.log(err))
}