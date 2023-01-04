import { Link } from "react-router-dom";
function Footer() {
    return ( 
    <div className="footer bg-secondary text-center text-white fixed-bottom">
        <div className="row py-4">
            <div className="col-7">
            <Link to='/list'>
                <p className="p-0 m-0 text-white">Properties listed by you</p>
                </Link>
            </div>
            <div className="col-5">
                <Link to='/post'>
                <p className="p-0 m-0 text-white">Post an add</p>
                </Link>
                
            </div>
        </div>
    </div> 
    );
}

export default Footer;