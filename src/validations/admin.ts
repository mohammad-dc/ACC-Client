import * as Yup from "yup";


export const AdminSchema = Yup.object().shape({
    email: Yup.string().email('يجب عليك ان تدخل ايميل بشكل صحيح').required('يجب ملئ الحقل'),
    password: Yup.string().min(8, 'اقل عدد من الاحرف هو 8').required('يجب ملئ الحقل'),
});