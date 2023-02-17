import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, Link} from "react-router-dom";

import { Navigation, Pagination, Keyboard, A11y } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Avatar from "../../components/common/avatarFeed";
import AdAnswerRedux from "../../components/adAnswer";
import Comments from "../../components/comments";

import actionOne from "../../actions/adOne";

import config from "../../config";

import "../../_assets/scss/_pages/adView.scss"

const Ad = ({onLoad, ad = {}, myID}) => {
    const {adID} = useParams();

    useEffect(() => {
        onLoad(adID)
    }, [adID]);

    return(
        <Box className="ad-view">

            <div className="ad-view__wrapper">

                <section className="ad-view__box">
                    <Box className="ad-view__slider">
                        <Swiper
                            className="ad-view__swiper-slide"
                            modules={[Navigation, Pagination, Keyboard, A11y]}
                            navigation={true}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                dynamicBullets: true
                            }}
                            centeredSlides={true}
                            slidesPerView={1}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {ad.images && ad.images.map((element, idx) => {
                                return (
                                    <SwiperSlide key={element._id}>
                                        <img className="ad-view__image"
                                             src={config.backendURL + element.url}
                                             alt={ad.title + `_${idx}`}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </section>

                <section className="ad-view__box">
                    <h2 className="ad-view__headline">Seller</h2>
                    <Box className="ad-view__owner">
                        <Avatar src={ad?.owner?.avatar?.url}
                                alt={ad?.owner?.nick}/>
                        <Link className="ad__card-profile-link"
                              to={'/user/' + ad?.owner?._id}
                        >{ad?.owner?.nick || ad?.owner?.login}</Link>
                    </Box>
                </section>

                <section className="ad-view__box">
                    <div className="ad-view__action-group">
                        {ad.title && <h1 className="ad-view__headline ad-view__headline--title">{ad.title}</h1>}
                        {ad.owner && ad.owner._id === myID && <Button className="ad-view__edit-button"
                                                                      variant="contained"
                                                                      size="large"
                        >
                            <Link to={'/edit/' + ad._id}>Edit</Link>
                        </Button>}
                    </div>
                    {ad.price && <p className="ad-view__price">{ad.price} ₴</p>}
                    {ad.description && <div>
                        <h2 className="ad-view__headline">Description</h2>
                        <p>{ad.description}</p>
                    </div>}
                </section>

                <AdAnswerRedux />

                <section className="ad-view__box ad-view__box--comments">
                    <h2 className="ad-view__headline">Comments</h2>
                    <div className="ad-view__comments-list">
                        {(ad.comments && Object.entries(ad.comments).length > 0) ?
                            <Comments comments={Object.entries(ad.comments).filter(elem => elem[1].answerTo === null)} />
                            :
                            <p>There are no comments</p>
                        }
                    </div>
                </section>

            </div>

        </Box>
    )
}

const AdRedux = () => {
    const dispatch = useDispatch();
    const ad = useSelector(state => state.promise.one?.payload)
    const myID = useSelector(state => state.auth?.payload?.sub?.id)

    return(
        <Ad onLoad={(id) => {dispatch(actionOne(id))}}
            ad={ad}
            myID={myID}
        />
    )
}

export default AdRedux;