import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, 
    FormControl, InputLabel, MenuItem, Select, Box, IconButton, Avatar, CircularProgress } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {ClubMemberSchema} from "../../../../validations/clubMembers";
import {clubMembersContext} from "../../../../store/store";
import {observer} from "mobx-react-lite";

let initialValues = {
    first_name: '',
    last_name: '',
    rank: ''
}

const ClubMemberAddDialog = observer(() => {
    const clubMembers = React.useContext(clubMembersContext);
    const [rank, setRank] = React.useState('');
    const [image, setImage] = React.useState('');

    const handleClose = () => {
        clubMembers.closeAddDialog()
    };

     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRank(event.target.value as string);
    };

    const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files && e.target.files[0]) {
            const value = e.target.files[0]
            setImage(URL.createObjectURL(value));
        }
  }

    return (
        <Dialog
        open={clubMembers.isAddDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">اضافة عضو للنادي</DialogTitle>
              <Formik
              initialValues={initialValues}
              validationSchema={ClubMemberSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true);
                clubMembers.createAdminClubMembers(values);
                }}
              >
                {({isSubmitting}) =>(
                    <Form>
                        <DialogContent>
                            <Box style={{position: 'relative', width: 'fit-content', margin: '0 auto'}}>
                                <Avatar src={image} style={{width: '200px', height: '200px', position: 'relative'}}/>
                                <Box style={{position: 'absolute', bottom: 0, left: 0}}>
                                    <input onChange={handleFileSelected} accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" />
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" style={{background: '#eee'}} aria-label="upload picture" component="span">
                                            <PhotoCamera style={{color: '#aaa'}}/>
                                        </IconButton>
                                    </label>
                                </Box>
                            </Box>
                            <CustomField placeholder="الاسم الأول" name="first_name" type="text" label="الاسم الأول" />
                            <CustomField placeholder="الاسم الأخير" name="last_name" type="text" label="الاسم الأخير" />
                            <FormControl variant="outlined" style={{width: '100%', marginTop: '10px'}}>
                                <InputLabel id="demo-simple-select-outlined-label">الرتبة</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={rank}
                                    onChange={handleChange}
                                    label="الرتبة"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value='مسؤول'>
                                        مسؤول
                                    </MenuItem>
                                    <MenuItem value='مساعد'>
                                        مساعد
                                    </MenuItem>
                                    <MenuItem value='مشارك'>
                                        مشارك
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={handleClose}>
                                الغاء
                            </Button>
                            <Button color="primary" disabled={isSubmitting} type="submit">
                                {
                                    clubMembers.isLoading? <CircularProgress size={50}/> : 'اضافة'
                                } 
                            </Button>
                        </DialogActions>
                    </Form>
                )}
              </Formik>
      </Dialog>
    )
})

export default ClubMemberAddDialog
