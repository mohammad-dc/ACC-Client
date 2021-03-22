import React from 'react';
import API from "../../api/utils/requests";
import {useHistory} from "react-router-dom";
import Cookies from "universal-cookie";
import { observer } from "mobx-react-lite";
import { adminContext } from "../../store/store";
import {Button, Typography, Backdrop, CircularProgress, Snackbar} from "@material-ui/core";
import {Formik, Form} from "formik";
import CustomField from "../../components/CustomeField";
import Alert from "../../components/Alert";
import {AdminSchema} from "../../validations/admin";
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from "../../constants/theme";
import {useStyles} from "../../assets/styles/admin/login";

let initialValues = {
    email: '',
    password: ''
};

const Login = observer(() => {
    const classes = useStyles();
    const history = useHistory();
    const cookies = new Cookies();
    const admin = React.useContext(adminContext);

    // stats
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [severity, setSeverity] = React.useState<'success' | 'error'>("success");

    // functions
    const handleCloseLoading = () => {
        setLoading(false);
    };
  
    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
  
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Typography variant="h4" className={classes.headLine}>تسجيل الدخول للمسؤول</Typography>
                <Formik
                initialValues={initialValues}
                validationSchema={AdminSchema}
                onSubmit={async (values, {setSubmitting}) => {
                    setSubmitting(true);
                    setLoading(true);
                    API.auth('admin/login', values)
                        .then( res => {
                                cookies.set(
                                    'adminToken', res.data.token,
                                    {
                                        sameSite: 'strict',
                                        path: '/admin/dashboard',
                                        expires: new Date(new Date().getTime() + 36 * 10000),
                                        domain : 'localhost',
                                        httpOnly: false,
                                        secure: false
                                    }
                                );
                                setLoading(false);
                                admin.isLogin = true;
                                history.push('/admin/dashboard/members');
                            }
                        )
                        .catch(error => {
                            if(error.response.status === 404 || error.response.status === 401){
                                setLoading(false);
                                setOpen(true);
                                setMessage(error.response.data.message);
                                setSeverity('error');
                            }
                        });
                    setSubmitting(false); 
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

            {/* for loading and alert*/}
            <Backdrop className={classes.backdrop} open={loading} onClick={handleCloseLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            
            <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>

        </ThemeProvider>
    )
})

export default Login
