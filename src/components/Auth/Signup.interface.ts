export interface ISignupRequestObject {
firstName:string
lastName:string
email:string
password:string
isAdmin?:string
}
export interface ISignupSuccessResponse{
    sessionToken:string
}