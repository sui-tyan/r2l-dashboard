import { Check, X } from 'lucide-react';

export default function PasswordMatch({
  isMatch,
}: {
  isMatch: boolean | undefined;
}) {
  return (
    <>
      {isMatch === true && (
        <div className="flex gap-2 text-[#3cd331]">
          <Check color="#3cd331" />
          Password match!
        </div>
      )}
      {isMatch === false && (
        <div className="flex gap-2 text-[#ff0000]">
          <X color="#ff0000" /> Password do not match!
        </div>
      )}
      {isMatch === undefined && ''}
    </>
  );
}
