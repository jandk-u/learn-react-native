import { CAP_NHAT_EMAIL } from "../reducer/inforReducer";



export const updateEmail = (email) => async dispatch =>{
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 3000);
        });
        dispatch({
            type: CAP_NHAT_EMAIL,
            email: email
        })
        console.log("Da cap nhat len server!")
    } catch (error) {

    }
}