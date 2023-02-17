import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import Box from "@mui/material/Box";

import Avatar from "../../components/common/avatarFeed";

import actionFullUser from "../../actions/fullUser";

import "../../_assets/scss/_pages/aboutUser.scss"
import AdListRedux from "../../components/adList";

const User = ({onLoad, user= {}, userAds, amountStatus, amount}) => {
    const {userID} = useParams();

    useEffect(() => {
        onLoad(userID)
    }, [userID]);

    return(
        <Box className="about-user"
             sx={{my: 2}}
        >
            <div className="about-user__avatar">
                <Avatar className="about-user__avatar-icon"
                        src={user?.avatar?.url}
                        alt={user?.nick}
                />
                <span className="about-user__avatar-name">{user.nick || user.login}</span>
            </div>
            {userAds && <div>
                <h2>User ads</h2>
                <AdListRedux list={userAds}
                             amountStatus={amountStatus}
                             amount={amount}
                />
            </div>}
        </Box>
    )
}

const UserRedux = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.promise.user?.payload);
    const userAds = useSelector(state => state.promise.userAds?.payload);
    const amountStatus = useSelector(state => state.promise?.userAdsCount?.status);
    const amount = useSelector(state => state.promise?.userAdsCount?.payload);

    return(
        <User onLoad={(id) => {dispatch(actionFullUser(id))}}
              user={user}
              userAds={userAds}
              amountStatus={amountStatus}
              amount={amount}
        />
    )
}

export default UserRedux;