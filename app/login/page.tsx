'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { authenticate } from '../_lib/actions/authenticate';
import { useFormState } from 'react-dom';
import { Submit } from '@/components/submit';
import bg from '@/public/bg.jpg';

export default function Login() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen relative">
      <button className="absolute right-0 m-5 lg:m-10 font-semibold z-10 ">
        <Link href={'/signup'} className="cursor-pointer">
          Sign Up
        </Link>
      </button>
      <div className="hidden lg:block lg:relative">
        <Image
          src={bg}
          priority
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
          <form action={dispatch}>
            <div>{errorMessage && <p>{errorMessage}</p>}</div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
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
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <Submit label="Login" />
              {/* <div className="flex w-full justify-center text-center items-center">
                <Separator className="w-1/3" />
                <p className="text-[11px] text-gray-500 mx-1">
                  OR CONTINUE WITH
                </p>
                <Separator className="w-1/3" />
              </div> */}
            </div>
          </form>
          <div className="text-gray-500 text-center text-sm">
            Unauthorized Access Will Be Logged and Reported
          </div>
          <div className="pt-10 justify-center flex gap-5 w-1/4 mx-auto xl:w-full">
            <Image alt="logo" src={'/ghent.png'} width="200" height="200" />
            <Image alt="logo" src={'/uc.png'} width="200" height="200" />
            <Image
              alt="logo"
              src={'/vliruos.png'}
              width="200"
              height="200"
              className="ml-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
