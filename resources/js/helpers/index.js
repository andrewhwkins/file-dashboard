import axios from "axios";

/**
 * Function to return a url friendly slug of a value.
 * @function
 * @param {string} value - The value to convert into a slug.
 * @param {string} replace - Optional space replace character.
 * @returns {string} - Slug version of the value.
 */
export const slugify = (value, replace = "") =>
    value
        .toLowerCase()
        .replace(/\s+/g, replace)
        .replace(/[^\w-]+/g, "");

export const camelize = (value) =>
    value
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) =>
            idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()
        )
        .replace(/\W+/g, "_");

export const apiInstance = axios.create({
    baseURL: `${process.env.MIX_DEV_APP_URL}/api/v1/`,
});

apiInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error.message);
    }
);
