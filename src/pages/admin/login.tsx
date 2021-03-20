import React from 'react'
import {Button, Typography} from "@material-ui/core";
import {Formik, Form} from "formik";
import CustomField from "../../components/CustomeField";
import {AdminSchema} from "../../validations/admin";
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "../../constants/theme";
import {useStyles} from "../../assets/styles/admin/login";

let initialValues = {
    email: '',
    password: ''
};

const Login = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.headLine}>تسجيل الدخول للمسؤول</Typography>
                <Formik
                initialValues={initialValues}
                validationSchema={AdminSchema}
                onSubmit={async (values, {setSubmitting}) => {
                    setSubmitting(true); 
                }}
                >
                    {({isSubmitting}) =>(
                        <Form>
                            <CustomField placeholder="الايميل" name="email" type="email" label="الايميل" />
                            <CustomField placeholder="كلمة المرور" name="password" type="password" label="كلمة المرور" />
                            <Button className={classes.Button} disabled={isSubmitting} type="submit">
                                تسجيل الدخول
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </ThemeProvider>
    )
}

export default Login
