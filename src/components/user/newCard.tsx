import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {INew} from "../../interfaces/news";
import {newsContext, newsDialogsContext} from "../../store/store";
import {observer} from "mobx-react-lite";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 auto'
  },
});


const NewsCard: React.FC<INew> = observer(({id, title, description, image, date_time}: INew) =>{
    const classes = useStyles();
    const news = React.useContext(newsContext);
    const newsDialogs = React.useContext(newsDialogsContext);

    return (
        <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
            component="img"
            alt={title}
            height="200"
            image={image}
            title={title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography gutterBottom>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" onClick={() => {
                news.newsSelected = id;
                newsDialogs.openViewDialog();
                }}>
           اقرأ المزيد
            </Button>
        </CardActions>
        </Card>
    );
})

export default NewsCard;