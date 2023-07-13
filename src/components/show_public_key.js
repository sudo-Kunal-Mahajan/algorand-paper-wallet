import React from "react";
import QRCode from "react-qr-code";

const ShowPublicKey = ({pub_key}) => {
    return (
            <div className="card  h-100">
                <div className="card-body">
                    <div className="card-title">
                        <h2>Public Key</h2>
                        <p>Scan this QR code to get the public key</p>
                    </div>
                    <div className="card-text text-center">
                        <QRCode value={pub_key} />
                        <p className="mt-2">{pub_key}</p>
                    </div>
                </div>
            </div>
    );
}
export default ShowPublicKey;