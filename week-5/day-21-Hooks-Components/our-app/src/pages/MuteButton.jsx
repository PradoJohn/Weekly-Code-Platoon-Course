
import { useState } from 'react';
import Off from '../icons/off.svg';
import On from '../icons/on.svg';

function MuteButton(){
  
  const [muted, setMuted] = useState(false);

  const muteMe = () => {
    setMuted(!muted);
  };

  //no input elements
  
  //handle event for a click on btn
  

  return (
    <>
    <h1>Mute me</h1>
    
    <div id="btn" onClick={muteMe}>
      <div id="btn-container">
        {muted ? <img src={On} /> : <img src={Off}/> }
      </div>

    </div>

    </>
  );
}


export default MuteButton