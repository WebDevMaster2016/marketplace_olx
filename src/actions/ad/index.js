import gql from "../../components/utils/gql";
import actionPromise from "../promise";

const actionAd = (ad) => {
    ad.images = ad.images.map(img => {
        return {_id: img._id}
    });

    return (
        actionPromise('ad', gql(`mutation upserAd($ad:AdInput) {
                                            AdUpsert(ad: $ad) {
                                                _id title images{
                                                    _id url
                                                }
                                            }
                                        }`, {ad}))
    )
}

export default actionAd;