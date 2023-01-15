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
export interface DbUserInfo {
    mail: string;
    name: string;
    encryptedPassword: string;
}
