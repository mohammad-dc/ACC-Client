import * as Yup from "yup";

export const OutstandingStudentsSchema = Yup.object().shape({
    first_name: Yup.string().required('يجب ملئ الحقل'),
    last_name: Yup.string().required('يجب ملئ الحقل'),
    image: Yup.mixed(),
    description: Yup.string().required('يجب ملئ الحقل'),
});
