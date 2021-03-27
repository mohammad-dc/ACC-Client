import * as Yup from "yup";
const urlMatches = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const EducationalStaffSchema = Yup.object().shape({
    first_name: Yup.string().required('يجب ملئ الحقل'),
    last_name: Yup.string().required('يجب ملئ الحقل'),
    image: Yup.mixed().required(),
    facebook: Yup.string().matches(urlMatches, ' يجب ادخال رابط بالشكل الصحيح'),
});
