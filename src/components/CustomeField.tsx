import React from 'react'
import {TextField} from "@material-ui/core";
import { FieldAttributes, useField } from 'formik';

type MyFieldProps = {label: string, type: string, multiline?: boolean } & FieldAttributes<{}>;

const CustomField: React.FC<MyFieldProps> = ({label, type, placeholder, multiline, ...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorField = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            style={{width: '100%', marginTop: '10px'}}
            variant="outlined"
            placeholder={placeholder}
            label={label}
            multiline={multiline}
            type={type}
            {...field}
            helperText={errorField}
            error={!!errorField}/>
    )
}

export default CustomField;