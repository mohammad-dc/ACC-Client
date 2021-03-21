import React from 'react'
import {Dialog , DialogActions , DialogContent, DialogTitle, Button, FormControlLabel, 
    FormControl, InputLabel, MenuItem, Select, Box, IconButton, Avatar } from "@material-ui/core";
import { TransitionDialog } from '../../../transitionDialog';
import {Formik, Form} from "formik";
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CustomField from "../../../CustomeField";
import {ClubMemberSchema} from "../../../../validations/clubMembers";
import {clubMembersContext} from "../../../../store/store";
import {IClubMember} from "../../../../interfaces/clubMember";
import {observer} from "mobx-react-lite";

const ClubMemberEditDialog: React.FC = observer(() => {
    const clubMembers = React.useContext(clubMembersContext);
    const [selectRank, setRank] = React.useState('');
    

    let initialValues = {
        first_name: '',
        last_name:'',
        rank: ''
    }

    const handleClose = () => {
        clubMembers.closeEditDialog()
    };

     const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setRank(event.target.value as string);
    };
    return (
        <Dialog
        open={clubMembers.isEditDialogOpen}
        TransitionComponent={TransitionDialog}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
          <DialogTitle id="alert-dialog-slide-title">تعديل هذا العضو</DialogTitle>
          <DialogContent>
             <Formik
              initialValues={initialValues}
              validationSchema={ClubMemberSchema}
              onSubmit={async (values, {setSubmitting}) => {
                setSubmitting(true); 
                }}
              >
                {({isSubmitting}) =>(
                    <Form>
                         <Box style={{position: 'relative', width: 'fit-content', margin: '0 auto'}}>
                                    <Avatar style={{width: '200px', height: '200px', position: 'relative'}}/>
                                    <Box style={{position: 'absolute', bottom: 0, left: 0}}>
                                        <input accept="image/*" style={{display: 'none'}} id="icon-button-file" type="file" />
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" style={{background: '#eee'}} aria-label="upload picture" component="span">
                                            <PhotoCamera style={{color: '#aaa'}}/>
                                            </IconButton>
                                        </label>
                                    </Box>
                                </Box>
                        <CustomField placeholder="االسم الأول" name="first_name" type="text" label="الاسم الأول" />
                        <CustomField placeholder="الاسم الأخير" name="last_name" type="text" label="الاسم الأخير" />
                        <FormControl variant="outlined" style={{width: '100%', marginTop: '10px'}}>
                                                <InputLabel id="demo-simple-select-outlined-label">الرتبة</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={selectRank}
                                                onChange={handleChange}
                                                label="Age"
                                                >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                        </FormControl>
                    </Form>
                )}
              </Formik>
          </DialogContent>
          <DialogActions>
            <Button color="primary">
                الغاء
            </Button>
            <Button color="primary">
                حفظ
            </Button>
          </DialogActions>
      </Dialog>
    )
})

export default ClubMemberEditDialog
