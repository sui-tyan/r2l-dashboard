'use client';

import { resetPassword } from '@/app/_lib/actions/resetPassword';
import { ResetPasswordSchema } from '@/app/_lib/definitions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState, ChangeEvent, useEffect } from 'react';
import { useFormState } from 'react-dom';
import PasswordMatch from '@/components/PasswordMatch';

export default function ResetPassword({
  params,
}: {
  params: { token: string };
}) {
  const [errorMessage, dispatch] = useFormState(resetPassword, undefined);
  const [passwordForm, setPasswordForm] = useState<ResetPasswordSchema>({
    'new-password': '',
    'retype-password': '',
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>();

  function onInputChange(e: ChangeEvent<HTMLInputElement>) {
    setPasswordForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    if (
      passwordForm['new-password'] === '' &&
      passwordForm['retype-password'] === ''
    ) {
      setIsPasswordMatch(undefined);
      return;
    }

    setIsPasswordMatch(
      passwordForm['new-password'] === passwordForm['retype-password']
    );
  }, [passwordForm]);

  return (
    <Card className="w-full max-w-sm mx-auto mt-32">
      <CardHeader>
        <CardTitle className="text-2xl">Reset Password</CardTitle>
        <CardDescription>Enter your new password.</CardDescription>
      </CardHeader>
      <form action={dispatch}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Input
              name="token"
              value={params.token}
              className="hidden"
              readOnly
            />
            <Label htmlFor="new-password">New Password</Label>
            <Input
              id="new-password"
              name="new-password"
              type="password"
              placeholder="New password"
              value={passwordForm['new-password']}
              onChange={onInputChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="retype-password">Retype New Password</Label>
            <Input
              id="retype-password"
              name="retype-password"
              type="password"
              placeholder="Retype new password"
              value={passwordForm['retype-password']}
              onChange={onInputChange}
              required
            />
          </div>
          <PasswordMatch isMatch={isPasswordMatch} />
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full" disabled={!isPasswordMatch}>
            Change Password
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
