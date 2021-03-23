import React from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import { FieldAttributes, useField } from 'formik';
import {IDropDownList} from "../interfaces/dropDownList";

type DrpoDownProps = { label: string, options: IDropDownList[]} & FieldAttributes<{}>;

const DropDownList: React.FC<DrpoDownProps> = ({label, options,...props}) => {
    const [field, meta] = useField<{}>(props);
    const errorField = meta.error && meta.touched ? meta.error : '';

    return (
        <FormControl variant="outlined" style={{width: '100%', marginTop: '10px'}}>
            <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
            <Select
                {...field}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label={label}
                error={!!errorField}
            >
                {
                    options.map((item: {key: string, value: string}) =>(
                       <MenuItem key={item.value} value={item.value}>
                            {item.key}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default DropDownList
