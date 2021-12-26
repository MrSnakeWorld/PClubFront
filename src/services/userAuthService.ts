import axios from "axios";

const authHost = "http://26.213.25.20:4080/";
const grantType = "password";
const clientId = "PClubClientId";
const clientSecret = "PClubClientSecret";

export interface IRegisterRequest {
    firstName: string,
    secondName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: string
}

export interface ILoginRequest {
    email: string,
    password: string
}

export interface ITokenBody {
    access_token: string,
    expires_in: number,
    token_type: string,
    scope: string
}

export const registerUser = (userData: IRegisterRequest) => {
    const registerEndpoint = authHost + "api/user/register";
    axios.post(registerEndpoint, userData);
}

export const getTokenHeader = (): ITokenBody => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
        const token: ITokenBody = JSON.parse(userToken);
        return token;
    }
    else{
        console.log("Войдите сука");
        throw new Error("СУКААААААААААААААААААААААААААААА");
    }
}

export const loginUser = (userData: ILoginRequest) => {
    const params = new URLSearchParams();
    params.append('grant_type', grantType);
    params.append('client_secret', clientSecret);
    params.append('client_id', clientId);
    params.append('username', userData.email);
    params.append('password', userData.password);

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    const tokenEndpoint = authHost + "connect/token";

    axios.post(tokenEndpoint, params, config)
        .then((result) => {
            console.log(result.data)
            localStorage.setItem("userToken", JSON.stringify(result.data))
        })
        .catch((err) => {
            console.log(err)
        });
}