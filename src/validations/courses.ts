import * as Yup from "yup";
const urlMatches = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const CourseVedioSchema = Yup.object().shape({
    video_url: Yup.string().matches(urlMatches, 'يجب ادخال رابط')
});

export const CourseSchema = Yup.object().shape({
    name: Yup.string().required('يجب ملئ الحقل'),
    type: Yup.string().required('يجب ملئ الحقل'),
    exams_url: Yup.string().matches(urlMatches, 'يجب ادخال رابط'),
    summaries_url: Yup.string().matches(urlMatches, 'يجب ادخال رابط'),
    course_url: Yup.string().matches(urlMatches, 'يجب ادخال رابط'),
    video_url: Yup.string().matches(urlMatches, 'يجب ادخال رابط'),
    vedios: Yup.array().of(CourseVedioSchema),
});
