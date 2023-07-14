import React, { useState } from 'react';
import './App.css';
import ShowPublicKey from './components/show_public_key';
import ShowMnemonic from './components/show_mnemonic';
import MainComponent from './components/algorand_main';
import TextContainer from './components/text_container';
import NavMain from './components/NavBar';
import TitlePage from './components/title_page';
function App() {
  const [address, setAddress] = useState(null);
  const handleAddressUpdate = (address) => {
    setAddress(address);
  }
  return (
    <div >
      <NavMain/>
      {!address && (
        <TitlePage address={address} handleAddressUpdate={handleAddressUpdate} />
      )}
      {
        address && (
          <div className='print-only container mt-3' style={{ maxWidth: "210mm" }}>
            <div className="row row-cols-2" >
              <div className='col p-0'>
                <MainComponent />
              </div>
              <div className='col p-0'>
                <ShowMnemonic mnemonic={address.mnemonic} />
              </div>
              <div className='col p-0 z-2'>
                <ShowPublicKey pub_key={address.addr} />
              </div>
              <div className='col p-0 z-1'>
                <TextContainer />
              </div>
            </div>
          </div>
        )
      }
    </div>

  );
}

export default App;
