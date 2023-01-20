import { Link } from "react-router-dom";

function Header() {
    return ( 
        <div>
            <div className="header bg-secondary text-start text-white fixed-top">
            <div className="container py-3">
            <div className="row">
                <div className="col-9">
                <Link to='/login' className="linkRoutes">
                    <p className="p-0 m-0 text-white "><span style={{height: 20,width: 20,background: 'yellow',visibility: 'hidden'}}><i className="fa-solid fa-location-dot px-3"></i></span><small>Login User</small></p>
                </Link>
                    <h3 className="p-0 m-0"><span style={{height: 20,width: 20}}><i className="fa-solid fa-location-dot px-2"></i></span>Current location</h3>
                </div>
                <div className="col-3 text-end">
                    <Link to='/favourites'>
                        <i className="fa-regular fa-heart fa-3x text-white"></i>
                    </Link>
                </div>
            </div>
            </div>
        </div>
        <div className="headerback">

        </div>
        </div>
     );
}

export default Header;