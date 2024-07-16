import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { useToast } from "./ui/use-toast";

type FormStatusProps = {
    errorMessage: string
}

export default function FormStatus({errorMessage}: FormStatusProps) {
    const status = useFormStatus()
    const { toast } = useToast()
    useEffect(() => {
        if(errorMessage) {
            toast({
            title: (typeof errorMessage === 'number') ? 'Success' :'Error',
            description: errorMessage
            })
        }
    }, [status])
    return (
        <Button type='submit' className="float-right mt-5">Upload</Button>
    )
}