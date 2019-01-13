import React, { useEffect } from 'react';

const Sound = ({ sound }) => {
  useEffect(() => {
    document.body.addEventListener('keypress', event => {
      if (event.key === sound.key) {
        playSound()
      }
    });
    return () => {
      document.body.removeEventListener('keypress', event => {
        if (event.key === sound.key) {
          playSound()
        }
      })
    }
  }, []);

  function playSound() {
    const audio = document.querySelector(`#${sound.name}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }
  return (
    <div className="sound" onClick={playSound}>
      {sound.name}
      <br />
      <br />
      ({sound.key})
      <audio id={sound.name} src={sound.url} />
    </div>
  )
};

export default Sound;
