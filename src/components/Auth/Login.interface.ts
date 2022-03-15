export interface ILoginRequestObject {
    email:string
    password:string
}
export interface ILoginSuccessResponse{
    sessionToken:string
    user:{
        isAdmin:boolean
    }
}