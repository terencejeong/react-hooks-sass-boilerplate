import React, { useState, useEffect } from 'react';
import { soundBoardSounds} from 'utils/soundboardSounds.js'
import Sound from 'components/Sound';

const SoundboardContainer = () => {
  const [sounds, setSounds] = useState(soundBoardSounds);
  useEffect(() => {
    let today = new Date();
    let currentDay = today.getDate();
  }, []);

  return (
    <div className="soundBoard">
      {sounds.map(sound => {
        return (
          <div>
            <Sound
              sound={sound}
            />
          </div>
        )
      })}
    </div>
  )
};

export default SoundboardContainer;
