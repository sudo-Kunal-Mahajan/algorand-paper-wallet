import algosdk from "algosdk";

const GenerateNewAddress = ({ address, handleAddressUpdate }) => {
    const generateAddress = () => {
        const account = algosdk.generateAccount();
        handleAddressUpdate({ addr: account.addr, mnemonic: algosdk.secretKeyToMnemonic(account.sk) });
    };
    return (
            <>
            {
                !address && (
                    <button onClick={generateAddress} className="btn btn-success btn-lg">Let's Start</button>
                )
            }

            {address && (                
                   
                <button onClick={generateAddress} className="btn btn-primary btn-lg">Generate New</button>
                              
            )}
        </>
    );
};

export default GenerateNewAddress;