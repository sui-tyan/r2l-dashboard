'use client';
import { Button } from '@/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteCookie } from 'cookies-next';

export default function RepositoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    deleteCookie('token');
    router.push('/login');
  }

  return (
    <>
      <div className="border-b-[1px] flex p-2 items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
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
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 ml-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Support
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-600 font-semibold hover:!text-red-600"
              onClick={logout}
            >
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          className={`link rounded-sm ${
            pathname === '/repository' ? 'bg-accent' : ''
          }`}
          href="/repository"
        >
          <Button variant="ghost">Repository</Button>
        </Link>
      </div>
      <div className="m-5">{children}</div>
    </>
  );
}
