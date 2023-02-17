import {useState} from "react";
import {useNavigate} from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    return(
        <fieldset className="search">
            <TextField className="search__field"
                       margin="normal"
                       required
                       fullWidth
                       id="email"
                       label="Search"
                       name="email"
                       autoComplete="search"
                       value={input}
                       onChange={(e) => setInput(e.target.value)}
            />
            <Button className="search__button"
                    onClick={() => navigate(`/search/${input}`)}
                    variant="contained"
                    sx={{
                        mt: 2,
                        mb: 1,
                        minWidth: '120px'
                    }}
            >Search</Button>
        </fieldset>
    )
}

export default Search;