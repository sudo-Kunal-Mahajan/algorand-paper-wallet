import React from "react";
import GenerateNewAddress from "./generate_address";
export const TitlePage = ({ address, handleAddressUpdate }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText("NA4VOZFZFSGZM6AQMMUMEIDSPQXN4GLEDE7OD4SFVNHV7APXIIWNL62AT4").then(() => {
            alert('Address copied to clipboard:');
        })
            .catch((error) => {
                alert('Error copying text to clipboard.');
        
            });
    }
    return (
        <div className="container my-3 ">
            <div className="row my-3">
                <div className="col-12 text-center">
                    <GenerateNewAddress address={address} handleAddressUpdate={handleAddressUpdate} />
                </div>
            </div>
            <div className="row my-2">
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Generate your keys</h5>
                            <p className="card-text">Generate your keys offline by clicking the Let's start button. You can regenrate as many times as you like.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Print it Out</h5>
                            <p className="card-text">Use <strong>Ctrl + P</strong> or the Print button provided to print out the keys in a 2x2 matrix.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Fold, Laminate and Secure</h5>
                            <p className="card-text">Fold the Paper in such a way that on one side it shows the Algorand Logo and on other side the QR code for the generated Public Key. Laminate and keep it in a secure place. </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <h3 className="text-center">About</h3>
            <div className="row my-2">
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <p className="card-text">The application is open source and code can be verified at the Github Repository. Link is in the navigation bar</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <p className="card-text">Created this after using the Ergo Paper Wallet Generator. Check that one out <a className="text-decoration-none" href="https://ergopaperwallet.org/">here</a>.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-4">
                    <div className="card h-100">
                        <div className="card-body">
                            
                                If you like this tool and would like to encourage development, tips are welcome 
                                <a href="https://algoexplorer.io/address/NA4VOZFZFSGZM6AQMMUMEIDSPQXN4GLEDE7OD4SFVNHV7APXIIWNL62AT4" target="_blank" rel="noreferrer" className="text-decoration-none"> NA4V...T4</a> 
                                <button className="btn btn-outline-white btn-white text-primary" onClick={copyToClipboard}> 
                            <svg fill="currentColor" width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,16V4H8V16H20M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z"></path></svg> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TitlePage;