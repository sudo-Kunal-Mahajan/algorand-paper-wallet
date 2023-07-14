import React, { useState } from 'react';
import './App.css';
import ShowPublicKey from './components/show_public_key';
import ShowMnemonic from './components/show_mnemonic';
import MainComponent from './components/algorand_main';
import TextContainer from './components/text_container';
import NavMain from './components/NavBar';
import TitlePage from './components/title_page';
import GenerateNewAddress from './components/generate_address';
function App() {
  const [address, setAddress] = useState(null);
  const handleAddressUpdate = (address) => {
    setAddress(address);
  }
  const handlePrint = () => {
    window.print();
  }
  return (
    <div >
      <NavMain />
      {!address && (
        <TitlePage address={address} handleAddressUpdate={handleAddressUpdate} />
      )}
      {
        address && (
          <>
            <div className='container'>
              <div className='my-3 d-flex justify-content-around'>

                <GenerateNewAddress address={address} handleAddressUpdate={handleAddressUpdate} />
                <button className='btn btn-success btn-lg' onClick={handlePrint}>Print</button>

              </div>

            </div>

            <div className='print-only container' style={{ maxWidth: "210mm" }}>
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
          </>
        )
      }
    </div>

  );
}

export default App;
