import { apiInstance } from "../helpers";

export const getFiles = async () => apiInstance.get("files");
export const deleteFile = async id => apiInstance.delete(`files/${id}`);
export const getFile = async id => apiInstance.get(`files/${id}`);

export default {
    getFiles,
    getFile,
    deleteFile
};
