import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardHeader} from '@mui/material';
import Box from "@mui/material/Box";
import ImageIcon from '@mui/icons-material/Image';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';

import AvatarFeedIcon from "../common/avatarFeed";

import actionFeedClear from "../../actions/feed/clear";
import actionFullFeed from "../../actions/feed/fullFeed";

import config from "../../config";

const ListItem = ({price, _id, owner, title, description, images, myID}) => {

    const Title = ({text}) =>
        <Typography gutterBottom
                    variant="h5"
                    component="div"
        >{text}</Typography>

    const Description = ({text}) =>
        <Typography className="ad__description"
                    variant="body2"
                    color="text.secondary"
        >{text}</Typography>

    const Price = ({text}) =>
        <Typography className="ad__card-price"
                    variant="h6"
                    sx={{mt: "auto", fontWeight: 700}}
        >{text}</Typography>

    return(
        <Card className="ad">
            {owner && <CardHeader className="ad__card-header"
                                  avatar={
                                      <AvatarFeedIcon className="avatar avatar--feed"
                                                      alt={owner.avatar?._id}
                                                      src={owner.avatar?.url}
                                      />
                                  }
                                  title={
                                      <Link className="ad__card-profile-link"
                                            to={'user/' + owner._id}
                                      >{owner.nick || owner.login}</Link>
                                  }
            />}
            {owner._id === myID && <Link className="ad__action-edit"
                                         to={'/edit/' + _id}
            >
                <EditIcon color="disabled"
                          sx={{
                              fontSize: 20
                          }}></EditIcon>
            </Link>
            }
            <Link className="ad__action-area-link"
                  to={'/ad/' + _id}
            >
                <CardActionArea className="ad__action-area"
                                component="div"
                >

                    {
                        (images && images.length > 0) ?
                            images && <CardMedia
                                className="ad__card-image"
                                component="img"
                                height="140"
                                image={config.backendURL + Array.from(images)[0]?.url}
                                alt={title && title}
                            /> :
                            <Box className="ad__image-box">
                                <ImageIcon color="disabled"
                                           sx={{
                                               fontSize: 100
                                           }}
                                />
                            </Box>
                    }
                    <CardContent className="ad__card-content">
                        {title ? <Title text={title} /> : <Title text="No title" />}
                        {description ? <Description text={description}/> : <Description text="No description"/>}
                        {price > 0 ? <Price text={`Price - ${price} ₴`}/> : <Price text="No price" />}
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

const AdList = ({list = [], myID, status, amountStatus, amount}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedElement, setIsLoadedElement] = useState(false);

    useEffect(() => {
        if(status === 'FULFILLED') {
            setIsLoaded(true);
        }
    }, [status]);

    useEffect(() => {
        setIsLoadedElement((status === 'PENDING') && (amountStatus === 'FULFILLED') && (list.length !== amount))
    }, [status, amountStatus]);

    return(
        <>
            {
                isLoaded === false
                ?
                <Box className="progress-box">
                    <LinearProgress />
                </Box>
                :
                <div className="ad-list">
                    {list.map(element => <ListItem key={element._id}
                                                   {...element}
                                                   myID={myID}
                    />)}
                    <Card style={{display: isLoadedElement ? 'block': 'none'}}
                          className="ad"
                    >
                        <LinearProgress />
                    </Card>
                </div>
            }
        </>
    )
}

const AdListRedux = ({list, amountStatus, amount}) => {
    const param = useParams();
    const dispatch = useDispatch();
    const myID = useSelector(state => state.auth?.payload?.sub?.id);
    const status = useSelector(state => state.promise?.list?.status);

    useEffect(() => {

        dispatch(actionFeedClear());
        dispatch(actionFullFeed(param.searchStr));
        window.onscroll = () => {
            if ((Math.ceil(window.innerHeight + window.scrollY)) >= document.body.offsetHeight) {
                dispatch(actionFullFeed(param.searchStr));
            }
        };
        return (() => {
            window.onscroll = null;
        })

    }, [param.searchStr])

    return(
        <AdList list={list}
                myID={myID}
                status={status}
                amount={amount}
                amountStatus={amountStatus}
        />
    )
}

export default AdListRedux;