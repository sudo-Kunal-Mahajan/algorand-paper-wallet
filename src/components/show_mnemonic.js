import React from "react";

const ShowMnemonic = ({mnemonic}) => {
    let i=0;
    return (
            <div className="card h-100">
                <div className="card-body">
                    <div className="card-title">
                        <h2>Your Menmonic</h2>
                        <p>Keep this safe. Losing this means loss of your funds</p>
                    </div>
                    <div className="card-text  d-flex align-items-center justify-content-center">
                        <p className="m-4 p-4 allow_wrap">
                        {mnemonic}
                        </p>
                    </div>
                </div>
            </div>
    );
}
export default ShowMnemonic;