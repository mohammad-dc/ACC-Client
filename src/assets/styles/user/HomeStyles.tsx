import {makeStyles, createStyles, Theme} from "@material-ui/core/styles";
import * as Color from "../../../constants/colors";

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        headerBox:{
            background: `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url(https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            color: Color.wightColor,
            width: '100%',
            padding: '30px 0'
        },
        logo: {
            width: '20%'
        },
        newsBox: {
            marginTop: '30px',
            padding: "10px 20px"
        },
        newsCardsContainer: {
            margin: '30px 0',
        },
        ClubMembersBox: { 
            marginTop: '30px',
            padding: "10px 20px",
            position: 'relative'
        },
    })
);