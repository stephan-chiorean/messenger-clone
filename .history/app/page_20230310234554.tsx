import { getServerSession } from 'next-auth/next';
import React from 'react';
import { Message } from '../typings';
import ChatInput from './ChatInput';
import MessageList from './MessageList';
import { Providers } from './providers';

async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.messages;
  const session = await getServerSession();
  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default HomePage;
