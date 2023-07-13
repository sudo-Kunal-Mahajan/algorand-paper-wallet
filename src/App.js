import React, { useState } from 'react';
import './App.css';
import GenerateNewAddress from './components/generate_address';
import ShowPublicKey from './components/show_public_key';
import ShowMnemonic from './components/show_mnemonic';
function App() {
  const [address,setAddress] = useState(null);
  const handleAddressUpdate = (address) => {
    setAddress(address);
  }
  return (
    <div className='container'>
      <GenerateNewAddress address={address} handleAddressUpdate={handleAddressUpdate} />
      {
        address && (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className='col'>
              <ShowPublicKey pub_key={address.addr} />
            </div>
            <div className='col'>
              <ShowMnemonic mnemonic={address.mnemonic} />
            </div>
          </div>
        )
      }
    </div>
    
  );
}

export default App;
