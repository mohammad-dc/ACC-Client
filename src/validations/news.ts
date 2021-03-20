import * as Yup from "yup";

export const NewsSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    image: Yup.mixed(),
    date_time: Yup.date()
});
