import {Link} from "react-router-dom";

import '../../../_assets/scss/components/common/_logo.scss';

const Logo = ({classMod = ""}) => {
    return(
        <Link className={`logo home-link ${classMod}`}
              to="/"
        >
            <span className="logo__letter logo__letter--h">H</span>
            <span className="logo__letter logo__letter--o">O</span>
            <span className="logo__letter logo__letter--l">L</span>
            <span className="logo__letter logo__letter--x">X</span>
        </Link>
    )
}

export default Logo;