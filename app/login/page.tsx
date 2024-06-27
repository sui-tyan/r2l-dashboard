import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Login() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen relative">
      <button className="absolute right-0 m-5 lg:m-10 font-semibold z-10 ">
        <Link href={'/signup'} className="cursor-pointer">
          Sign Up
        </Link>
      </button>
      <div className="hidden lg:block lg:relative">
        <Image
          src="/bg.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50  backdrop-blur-[2px]"></div>
      </div>
      <div className="relative flex items-center justify-center py-12 m-2.5 ">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <Image
              alt="logo"
              src={'/r2l-loader.png'}
              width="150"
              height="150"
              className="mx-auto"
            />
            <h1 className="text-3xl font-bold">Rights2LIFE Repository</h1>
            <p className="text-balance text-muted-foreground">
              Rights2LIFE Research Repository Portal
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <Link href={'/dashboard'}>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </Link>
            <div className="flex w-full justify-center text-center items-center">
              <Separator className="w-1/3" />
              <p className="text-[11px] text-gray-500 mx-1">OR CONTINUE WITH</p>
              <Separator className="w-1/3" />
            </div>
            <Button variant="outline" className="w-full">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Login with Google
            </Button>
          </div>
          <div className="text-gray-500 text-center text-sm">
            Unauthorized Access Will Be Logged and Reported
          </div>
          <div className="pt-10 justify-center flex gap-5 w-1/4 mx-auto xl:w-full">
            <Image alt="logo" src={'/ghent.png'} width={200} height={200} />
            <Image alt="logo" src={'/uc.png'} width={200} height={200} />
            <Image
              alt="logo"
              src={'/vliruos.png'}
              width={200}
              height={200}
              className="ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
