'use client';

import { Toaster } from '@/components/ui/toaster';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import React, { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { api } from '@/lib/api';
import { CurrentSelectedResearch, RecentUploadType } from '../_lib/definitions';

export default function Repository() {
  const [recentUploads, setRecentUploads] =
    useState<CurrentSelectedResearch[]>();
  const [currentSelected, setCurrentSelected] =
    useState<CurrentSelectedResearch>();

  useEffect(() => {
    api
      .get('/research/view-all', {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
        },
      })
      .then((response) => {
        response.data.forEach((upload: any) => {
          console.log(upload);
          let recentUpload: CurrentSelectedResearch = {
            research_title: upload.title,
            research_author: upload.authors,
            research_published_date: upload.published_date,
            research_publisher: upload.publisher,
            research_institution: upload.institution,
            research_abstract: upload.abstract,
            file_uri: upload.file_uri,
          };

          setRecentUploads((prev) => {
            const isDuplicate = prev?.some(
              (upload) => upload.research_title === recentUpload.research_title
            );

            if (!isDuplicate) {
              return [...(prev || []), recentUpload];
            }

            return prev;
          });
        });
      });
  }, []);

  function selectResearch(research: CurrentSelectedResearch) {
    setCurrentSelected(research);
  }

  return (
    <>
      <Toaster />
      <h1 className="font-bold text-2xl mb-3">Repository</h1>
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
            <div className="min-h-80 max-h-80 2xl:min-h-[70vh] overflow-auto">
              <CardContent className="grid gap-2 overflow-auto">
                {recentUploads?.map((record, index) => (
                  <React.Fragment
                    key={`${index}${record.research_title}repository`}
                  >
                    <div
                      className="flex items-center gap-4 cursor-pointer"
                      onClick={() => {
                        selectResearch(record);
                      }}
                    >
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {record.research_title}
                        </p>
                        <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                          {record.research_author} -{' '}
                          {record.research_published_date}
                        </p>
                      </div>
                    </div>
                    <Separator />
                  </React.Fragment>
                ))}
              </CardContent>
            </div>
          </Card>
        </div>
        {currentSelected && (
          <div className="md:col-span-2 lg:col-span-1">
            <Card x-chunk="dashboard-01-chunk-5" className="h-full">
              <CardHeader>
                <CardTitle>{currentSelected.research_title}</CardTitle>
                <CardDescription>
                  {currentSelected.research_author}
                </CardDescription>
                <CardDescription>
                  {currentSelected.research_publisher} |{' '}
                  {currentSelected.research_published_date} |{' '}
                  {currentSelected.research_institution}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <CardTitle className="mb-2">Abstract</CardTitle>
                {currentSelected.research_abstract}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
