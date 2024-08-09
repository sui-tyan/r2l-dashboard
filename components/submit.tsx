import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import Spinner from './Spinner';

type SubmitProps = {
  label: string;
  className?: string;
};

export function Submit({ label, className }: SubmitProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Spinner className="mx-auto" />
      ) : (
        <Button type="submit" className={`${className}`} disabled={pending}>
          {pending && (
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            />
          )}
          {label}
        </Button>
      )}
    </>
  );
}
