

const NavMain = ({ address, handleAddressUpdate }) => {

    return (
        <>
            <div id="navbar_main_section">
                <nav className="navbar navbar-expand-md bg-dark border-bottom border-bottom-dark  sticky-top p-3 " data-bs-theme="dark" role="navigation">
                    <div className="container-fluid">
                        <h5 className="navbar-brand mt-0 mb-0">Algorand's Paper Wallet Generator</h5>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav  ms-auto">


                                <li className="nav-item ">
                                    <a href="" className="nav-link text-white">Github</a>
                                </li>

                                <li className="nav-item ">
                                    <a href="" className="nav-link text-white">About Algorand</a>
                                </li>

                            </ul>



                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavMain;