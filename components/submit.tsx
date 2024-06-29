import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

type SubmitProps = {
  label: string;
};

export function Submit({ label }: SubmitProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {label}
    </Button>
  );
}
