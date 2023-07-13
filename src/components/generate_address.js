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
                    <button onClick={generateAddress} className="nav-link">Generate Address</button>
                )
            }

            {address && (                
                   
                <button onClick={generateAddress} className="nav-link">Generate New</button>
                              
            )}
        </>
    );
};

export default GenerateNewAddress;