"use client"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { login, clearErrors } from "@/actions/userActions";

import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Login() {

  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { isAuthenticated, error, user } = useSelector(state => state.auth)

  useEffect(() => {
    if(isAuthenticated){
      router.push({ pathname: '/' })
    }
    if(error){
      toast.error(error);
      document.getElementById('email').classList.add('red-border');
      document.getElementById('password').classList.add('red-border');
      dispatch(clearErrors())
    } 
  }, [dispatch, isAuthenticated, error, router, user])

  const submitHandler = async (e) => {
    e.preventDefault();
    document.getElementById('email').classList.remove('red-border');
    document.getElementById('password').classList.remove('red-border');
    if(email == ''){
      document.getElementById('email').classList.add('red-border');
      toast.error('Please enter Email !!');
    }else if(password == ''){
      document.getElementById('password').classList.add('red-border');
      toast.error('Please enter password !!')
    }else{
      const user = {email, password}
      console.log(user);
      dispatch(login(user));
    }
}

  return (
    (<div className="flex min-h-[100dvh] flex-col">
      <header className="flex h-16 w-full shrink-0 items-center px-4 md:px-6 border-b">
        <Link className="mr-6 flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Login
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <div>
          <div className="flex h-full items-center justify-center px-4 py-12 md:px-6">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>Enter your email and password to access your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" required type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" required type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={submitHandler}>Login</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
