import * as SignIn from '@clerk/elements/sign-in'

export default function SignInPage() {
    return (
        <div>
            <SignIn.Root>
                <SignIn.Step name="start">
                    <h1>Sign in to your account</h1>
                </SignIn.Step>
            </SignIn.Root>
        </div>
    );
}