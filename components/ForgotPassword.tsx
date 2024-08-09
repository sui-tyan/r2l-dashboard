import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useFormState } from 'react-dom';
import { requestPasswordReset } from '@/app/_lib/actions/requestPasswordReset';
import { Submit } from './submit';

export default function ForgotPassword() {
  const [errorMessage, dispatch] = useFormState(requestPasswordReset, null);
  return (
    <Dialog>
      <DialogTrigger className="ml-auto inline-block text-sm underline">
        Forgot your password?
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form action={dispatch}>
          <div className="flex flex-col gap-4">
            <DialogHeader>
              <DialogTitle>Forgot Password</DialogTitle>
              <DialogDescription>
                If your email exists, you will receive an email for resetting
                your password
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                name="email"
                placeholder="Email Address"
                className="col-span-4"
              />
            </div>
            <DialogFooter>
              <p className="self-center text-sm">{errorMessage}</p>
              <Submit label="Send" />
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
