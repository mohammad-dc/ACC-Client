import {makeStyles, Theme} from "@material-ui/core/styles";

export const useAllPropsStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
})
);