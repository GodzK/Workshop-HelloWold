import axios from "axios"
import { axiosInstance } from "../utils/axiosInstance"
export const getUser = async ()=>{
    try {
        const response = await axiosInstance.get("/users");
        console.log(response)
        return response
    } catch (error) {
        return error.response
    }
}