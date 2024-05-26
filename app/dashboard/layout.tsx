'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="border-b-[1px] flex p-2 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <>
              <Button
                variant="outline"
                role="combobox"
                className="w-[200px] justify-between rounded-[4px] hidden md:inline-flex"
              >
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  Alicia Koch
                </div>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>

              <div>
                <Avatar className="md:hidden h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
        <Button variant="ghost">Dashboard</Button>
        <Separator className="bg-red" orientation="vertical" />
        <Button variant="ghost">Settings</Button>
      </div>
      <div className="m-5">{children}</div>
    </>
  );
}
