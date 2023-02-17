import Box from "@mui/material/Box";
import AdEditRedux from "../../components/adEdit";

const CreateAd = ({loadOld}) => {
    return(
        <Box sx={{my: 2}}>
            <AdEditRedux loadOld={loadOld}/>
        </Box>
    )
}

export default CreateAd;