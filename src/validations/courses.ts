import * as Yup from "yup";
const urlMatches = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const CourseSchema = Yup.object().shape({
  name: Yup.string().required("يجب ملئ الحقل"),
  type: Yup.string().required("يجب ملئ الحقل"),
  setup: Yup.string(),
  exams: Yup.string().matches(urlMatches, "يجب ادخال رابط"),
  summaries: Yup.string().matches(urlMatches, "يجب ادخال رابط"),
  course: Yup.string().matches(urlMatches, "يجب ادخال رابط"),
  video_url: Yup.string(),
});
