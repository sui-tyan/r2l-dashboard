import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowUpFromLine } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

export default function Upload() {
  return (
    <>
      <div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
              <div className="md:col-span-1">
                <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                  <div>
                    <Label htmlFor="paper">Research Paper</Label>
                    <Input id="paper" type="file" />
                  </div>
                  <Card className="p-10 h-[282px] flex place-content-center items-center">
                    <div className="">
                      <ArrowUpFromLine className="mx-auto h-10 w-10" />
                      <CardDescription className="text-center mt-2">
                        Drag and drop file here
                      </CardDescription>
                    </div>
                  </Card>
                </div>
                <Separator className="my-5 md:hidden" />
              </div>
              <div className="md:col-span-1 md:ml-5">
                <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                  <div>
                    <Label htmlFor="research_title">Title</Label>
                    <Input
                      id="research_title"
                      type="text"
                      placeholder="Enter title here"
                    />
                  </div>
                  <div>
                    <Label htmlFor="research_author">Author/s</Label>
                    <Input
                      id="research_author"
                      type="text"
                      placeholder="e.g. John Smith, Juan de La Cruz"
                    />
                  </div>
                  <div>
                    <Label htmlFor="research_publisher">Publisher</Label>
                    <Input
                      id="research_publisher"
                      type="text"
                      placeholder="Enter publisher here"
                    />
                  </div>
                  <div>
                    <Label htmlFor="research_institution">Institution</Label>
                    <Input
                      id="research_institution"
                      type="text"
                      placeholder="Enter institution here"
                    />
                  </div>
                  <div>
                    <Label htmlFor="research_published_date">
                      Published Date
                    </Label>
                    <Input
                      id="research_published_date"
                      type="text"
                      placeholder="Enter published date"
                    />
                  </div>
                </div>
                <Separator className="mt-5 md:hidden" />
              </div>
              <div className="w-full md:col-span-2 lg:ml-5 mt-5 lg:mt-0">
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Abstract</Label>
                  <Textarea
                    className="h-[200px] lg:h-[335px]"
                    placeholder="Type your message here."
                    id="message"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
