import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useAuthActions } from "@convex-dev/auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SignInFlow } from "../types";
import { useState } from "react";

interface SignInCardProps {
    setState: (state: SignInFlow) => void;
};

export const SignInCard = ({ setState }: SignInCardProps) => {
    const { signIn } = useAuthActions();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleProviderSignIn = (value: "github" | "google") => {
        signIn(value);
    };

    return (
        <div>
            <Card className="h-full w-full p-8">
                <CardHeader className="px-0 pt-0">
                    <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Use your email or other services to login to your account.
                </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 px-0 pb-0">
                    <form className="space-y-2.5">
                        <Input disabled={false} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required/>
                        <Input disabled={false} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required/>
                        <Button type="submit" className="w-full" size="lg" disabled={false}>
                            Continue
                        </Button>
                    </form>
                    <Separator />
                    <div className="flex flex-col gap-y-2.5">
                        <Button type="button" onClick={() => {}} variant="outline" className="w-full relative" size="lg" disabled={false}>
                            <FcGoogle className="size-5 absolute top-3 left-2.5" />
                            Continue with Google
                        </Button>
                        <Button type="button" onClick={() => handleProviderSignIn("github")} variant="outline" className="w-full relative" size="lg" disabled={false}>
                            <FaGithub className="size-5 absolute top-3 left-2.5" />
                            Continue with Github
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Don&apos;t have an account? <span onClick={() => setState("signUp")} className="text-sky-700 hover:underline cursor-pointer">Sign Up</span>
                    </p>
                </CardContent>
            </Card>
        </div>
    )
};
