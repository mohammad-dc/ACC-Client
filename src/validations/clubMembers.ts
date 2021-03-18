import * as Yup from "yup";


export const ClubMemberSchema = Yup.object().shape({
    first_name: Yup.string().required('يجب ملئ الحقل'),
    last_name: Yup.string().required('يجب ملئ الحقل'),
    rank: Yup.string().required('يجب ملئ الحقل')
});