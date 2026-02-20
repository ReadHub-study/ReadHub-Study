export const baseURL = "https://readhub-study.onrender.com/api/";
const CLOUDINARY_NAME = "";

export const apiEndpoints = {
    LOGIN: "auth/login",
    REGISTER: "auth/register",
    REFRESH_TOKEN: "auth/refresh",
    LOGOUT: "auth/logout",
    GOOGLE_AUTH: "auth/google",
    FORGOT_PASSWORD: "auth/forget-password",
    PASSWORD_TOKEN_VERIFICATION: "auth/password-token-verification",
    RESET_PASSWORD: "auth/reset-password",
    USER_PROFILE: "/profile/",
    DELETE_PROFILE: "/profile/delete",
    UPDATE_PROFILE: "/profile/update",
    CLOUDINARY_SIGNATURE: "/cloudinary-signature/image",
    UPLOAD_IMAGE: `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
}
