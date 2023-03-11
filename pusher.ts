import Pusher from 'pusher';
import ClientPusher from 'pusher-js';
export const serverPusher = new Pusher({
  appId: '1566592',
  key: '9ac0a2a8e3c05b6e6e01',
  secret: '4a12b18255457ddfecbd',
  cluster: 'us3',
  useTLS: true,
});

export const clientPusher = new ClientPusher('9ac0a2a8e3c05b6e6e01', {
  cluster: 'us3',
  forceTLS: true,
});
