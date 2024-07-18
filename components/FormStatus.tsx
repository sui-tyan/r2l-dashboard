import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { useEffect } from 'react';
import { useToast } from './ui/use-toast';
import { FormStateSchema } from '@/app/_lib/definitions';

export default function FormStatus({ type, message }: FormStateSchema) {
  const status = useFormStatus();
  const { toast } = useToast();
  useEffect(() => {
    if (!(type === 'none')) {
      if (type) {
        toast({
          title: type === 'success' ? 'Success' : 'Error',
          description: message,
        });
      }
    }
  }, [status]);
  return (
    <Button
      type="submit"
      disabled={status.pending}
      className="float-right mt-5"
    >
      Upload
    </Button>
  );
}
