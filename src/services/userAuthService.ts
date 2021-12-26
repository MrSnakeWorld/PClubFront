import axios from "axios";
import { config } from "process";

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

export interface IErrorRegsitrationResponse {
    code: string | null,
    description: string | null
}

export interface ILoginResponse {
    error: string | null,
    error_description: string | null,
    access_token: string | null
}

export const registerUser = async (userData: IRegisterRequest): Promise<IErrorRegsitrationResponse> => {
    const registerEndpoint = authHost + "api/user/register";
    const response = await axios.post<IErrorRegsitrationResponse>(registerEndpoint, userData);
    return response.data;
}

export const getTokenHeader = (): ITokenBody => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
        const token: ITokenBody = JSON.parse(userToken);
        return token;
    }
    else{
        throw new Error("СУКААААААААААААААААААААААААААААА");
    }
}

export interface IUserInfo {
    Email: string,
    FirstName: string,
    SecondName: string,
    PhoneNumber: string,
    Role: string,
    sub: string
}

export const getUserInfo = async () : Promise<IUserInfo> => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
        const response: IUserInfo = JSON.parse(userInfo);
        return response;
    }
    else {
        const token = getTokenHeader();
        const response = await axios.post<IUserInfo>(authHost + "connect/userinfo", null, {headers: { Authorization: `Bearer ${token.access_token}` }})
        localStorage.setItem("userInfo", JSON.stringify(response.data))
        return response.data;
    }
}

export const loginUser = async (userData: ILoginRequest): Promise<ILoginResponse> => {
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

    const response = await axios.post<ILoginResponse>(tokenEndpoint, params, config);
    localStorage.setItem("userToken", JSON.stringify(response.data))
    return response.data;
}