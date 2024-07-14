"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowUpFromLine } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { uploadResearch } from '@/app/_lib/actions/uploadResearch';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';
import FormStatus from '@/components/FormStatus';

export default function Upload() {
  const [errorMessage, dispatch] = useFormState(uploadResearch, undefined);
  return (
    <>
      <div>
        <Card className="mt-8 pb-10">
          <CardHeader>
            <CardTitle>Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={dispatch}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
                <div className="md:col-span-1">
                  <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                    <div>
                      <Label htmlFor="manuscript">Research Paper</Label>
                      <Input id="manuscript" type="file" name='manuscript' accept='application/pdf' />
                    </div>
                    <Card className="p-10 h-[282px] flex place-content-center shadow-none items-center border-dashed ">
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
                        name='research_title'
                        type="text"
                        placeholder="Enter title here"
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_author">Author/s</Label>
                      <Input
                        id="research_author"
                        name="research_author"
                        type="text"
                        placeholder="e.g. John Smith, Juan de La Cruz"
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_publisher">Publisher</Label>
                      <Input
                        id="research_publisher"
                        name="research_publisher"
                        type="text"
                        placeholder="Enter publisher here"
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_institution">Institution</Label>
                      <Input
                        id="research_institution"
                        name="research_institution"
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
                        name="research_published_date"
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
                      name="message"
                    />
                  </div>
                </div>
              </div>
              <FormStatus errorMessage={errorMessage} />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
