"use client";
import { getProviders} from "next-auth/react";

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({providers}: Props) {
  return (
    <div>
        {Object.values(providers!).map((provider)=> (
            <button>
                Sign in with {provider.name}
            </button>
        ))}
    </div>
  )
}

export default SignInComponent