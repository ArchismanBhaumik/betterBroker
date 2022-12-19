function Header() {
    return ( 
        <div className="header bg-secondary text-start text-white">
            <div className="container py-3">
            <div className="row">
                <div className="col-9">
                    <p className="p-0 m-0"><span style={{height: 20,width: 20,background: 'yellow',visibility: 'hidden'}}><i className="fa-solid fa-location-dot px-3"></i></span><small>Login User</small></p>
                    <h3 className="p-0 m-0"><span style={{height: 20,width: 20}}><i className="fa-solid fa-location-dot px-2"></i></span>Current location</h3>
                </div>
                <div className="col-3 text-end">
                <i className="fa-regular fa-heart fa-3x"></i>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Header;