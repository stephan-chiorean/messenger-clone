'use client';
import { getProviders } from 'next-auth/react';
import { signIn } from 'next-auth/react';

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
    console.log("FACEBOOK FIRST", process.env.FACEBOOK_CLIENT_ID)
    console.log("FACEBOOK SECRET", process.env.FACEBOOK_CLIENT_SECRET)
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || 'http://localhost:3000',
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;
