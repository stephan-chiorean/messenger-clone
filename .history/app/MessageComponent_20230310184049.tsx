import React from 'react';
import { Message } from '../typings';
import Image from 'next/image';

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  return (
    <div>
      <div>
        <Image
          className='rounded-full mx-2'
          src={message.profilePic}
          alt='Profile Picture'
          height={10}
          width={50}
        />
      </div>
    </div>
  );
}

export default MessageComponent;
