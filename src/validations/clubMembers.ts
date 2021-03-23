import * as Yup from "yup";


export const ClubMemberSchema = Yup.object().shape({
    first_name: Yup.string().required('يجب ملئ الحقل'),
    last_name: Yup.string().required('يجب ملئ الحقل'),
    rank: Yup.string().oneOf(['مسؤول', 'مشارك','مساعد']).required('يجب اختيار رتبة'),
    image: Yup.mixed().required()
});