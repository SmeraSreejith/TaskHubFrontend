import { serverUrl } from "./serverUrl";
import commonApi from "./commonApi";

export const registerApi=async(data)=>{
    return await commonApi(`${serverUrl}/reg`,'POST',"",data)
}

export const loginApi=async(data)=>{
    return await commonApi(`${serverUrl}/log`,'POST',"",data)
}

export const addTaskApi=async(data,header)=>{
    return await commonApi(`${serverUrl}/addtask`,'POST',header,data)
}

export const getTaskApi=async(header,searchKey)=>{
    return await commonApi(`${serverUrl}/gettask?search=${searchKey}`,'GET',header,"")
}

export const getTaskById=async(tid,header)=>{
    return await commonApi(`${serverUrl}/getbyid/${tid}`,'GET',header,"")
}

export const deleteTaskApi=async(id,header)=>{
    return await commonApi(`${serverUrl}/deletetask/${id}`,'DELETE',header,{})
}

export const editTaskApi=async(data,id,header)=>{
    return await commonApi(`${serverUrl}/updatetask/${id}`,'PUT',header,data)
}