import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Repository() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-3">
      <div className="md:col-span-2">
        <Card x-chunk="dashboard-01-chunk-5">
          <CardHeader>
            <div className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>List of Papers</CardTitle>
                <CardDescription className="mt-1">Repository</CardDescription>
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-28 md:w-full"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Research Title
                </p>
                <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                  Author - Published Date
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Research Title
                </p>
                <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                  Author - Published Date
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Research Title
                </p>
                <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                  Author - Published Date
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Research Title
                </p>
                <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                  Author - Published Date
                </p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center gap-4">
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  Research Title
                </p>
                <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                  Author - Published Date
                </p>
              </div>
            </div>
            <Separator />
          </CardContent>
        </Card>
      </div>
      <div className="md:col-span-1">
        <Card x-chunk="dashboard-01-chunk-5" className="h-full">
          <CardHeader>
            <CardTitle>Research Title</CardTitle>
            <CardDescription>Authors</CardDescription>
            <CardDescription>
              Publisher | Published Date | Institution
            </CardDescription>
          </CardHeader>

          <CardContent>
            <CardTitle className="mb-2">Abstract</CardTitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio
            incidunt saepe soluta possimus, tempore ipsam minima nulla delectus
            nemo vitae, suscipit pariatur cum quaerat, eveniet nobis hic
            nesciunt ut?
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
