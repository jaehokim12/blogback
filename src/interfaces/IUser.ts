export type userMail = string;
export interface UserInfo {
    name: string;
    mail: string;
    password: string;
}
export interface UserData {
    name: string;
    mail: string;
    token: string;
}
export interface UserHashInfo {
    mail: string;
    name: string;
    encryptedPassword: string;
}
export interface UserLoginInfo {
    mail: string;
    password: string;
    token?: string;
}
export interface DbUserData {
    dname: string;
    dmail: string;
    dpassword: string;
}
// export interface UserTokenData {
//     mail: string;
//     token: string;
//     name: string;
// }
