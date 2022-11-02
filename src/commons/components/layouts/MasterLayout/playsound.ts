import { Howl } from 'howler';

export const soundNewOrder = () => {
  const sound = new Howl({
    src: [require('@/assets/audio/new-order.mp3')],
    onplayerror: function () {
      sound.once('unlock', function () {
        sound.play();
      });
    },
  });
  return sound;
};

export const soundArrived = () => {
  const sound = new Howl({
    src: [require('@/assets/audio/customer-arrived.mp3')],
    onplayerror: function () {
      sound.once('unlock', function () {
        sound.play();
      });
    },
  });
  return sound;
};
