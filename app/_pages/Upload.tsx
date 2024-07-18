'use client';

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
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import FormStatus from '@/components/FormStatus';
import { FormStateSchema, UploadFormSchema } from '../_lib/definitions';

export default function Upload() {
  const [formState, dispatch] = useFormState<FormStateSchema, FormData>(
    uploadResearch as any,
    {
      type: 'none',
      message: '',
    }
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const [formValues, setFormValues] = useState<UploadFormSchema>({
    research_title: '',
    research_author: '',
    research_published_date: '',
    research_publisher: '',
    research_institution: '',
    research_abstract: '',
  });

  useEffect(() => {
    if (formState.type === 'success') {
      setFormValues({
        research_title: '',
        research_author: '',
        research_published_date: '',
        research_publisher: '',
        research_institution: '',
        research_abstract: '',
      });

      inputRef.current && (inputRef.current.value = '');
    }
  }, [formState.type]);

  function InputOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function TextAreaOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <>
      <div>
        <Card className="mt-8 pb-10">
          <CardHeader>
            <CardTitle>Upload</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={dispatch} id="uploadResearchForm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5">
                <div className="md:col-span-1">
                  <div className="grid w-full max-w-sm items-center gap-1.5 space-y-2">
                    <div>
                      <Label htmlFor="manuscript">Research Paper</Label>
                      <Input
                        id="manuscript"
                        type="file"
                        name="manuscript"
                        accept="application/pdf"
                        ref={inputRef}
                      />
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
                        name="research_title"
                        type="text"
                        value={formValues.research_title}
                        placeholder="Enter title here"
                        onChange={InputOnChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_author">Author/s</Label>
                      <Input
                        id="research_author"
                        name="research_author"
                        type="text"
                        value={formValues.research_author}
                        placeholder="e.g. John Smith, Juan de La Cruz"
                        onChange={InputOnChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_publisher">Publisher</Label>
                      <Input
                        id="research_publisher"
                        name="research_publisher"
                        type="text"
                        value={formValues.research_publisher}
                        placeholder="Enter publisher here"
                        onChange={InputOnChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="research_institution">Institution</Label>
                      <Input
                        id="research_institution"
                        name="research_institution"
                        type="text"
                        value={formValues.research_institution}
                        placeholder="Enter institution here"
                        onChange={InputOnChange}
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
                        value={formValues.research_published_date}
                        placeholder="Enter published date"
                        onChange={InputOnChange}
                      />
                    </div>
                  </div>
                  <Separator className="mt-5 md:hidden" />
                </div>
                <div className="w-full md:col-span-2 lg:ml-5 mt-5 lg:mt-0">
                  <div className="grid w-full gap-1.5">
                    <Label htmlFor="research_abstract">Abstract</Label>
                    <Textarea
                      className="h-[200px] lg:h-[335px]"
                      placeholder="Abstract here..."
                      id="research_abstract"
                      value={formValues.research_abstract}
                      name="research_abstract"
                      onChange={TextAreaOnChange}
                    />
                  </div>
                </div>
              </div>
              <FormStatus type={formState.type} message={formState.message} />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
