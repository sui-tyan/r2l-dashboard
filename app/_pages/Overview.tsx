'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { api } from '@/lib/api';
import { useEffect } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { RecentUploadType } from '../_lib/definitions';

export default function Overview() {
  const [numberOfPapers, setNumberOfPapers] = useState<number>(0);
  const [recentUploads, setRecentUploads] = useState<RecentUploadType[]>();
  const data = [
    { name: 'Jan ', uv: 4000, pv: 90, amt: 90 },
    { name: 'Feb', uv: 3000, pv: 25, amt: 100 },
    { name: 'Mar', uv: 2000, pv: 65, amt: 100 },
    { name: 'Apr', uv: 2780, pv: 70, amt: 100 },
    { name: 'May', uv: 1890, pv: 85, amt: 100 },
    { name: 'Jun', uv: 2390, pv: 30, amt: 100 },
    { name: 'Jul', uv: 3490, pv: 25, amt: 100 },
    { name: 'Aug', uv: 1244, pv: 75, amt: 100 },
    { name: 'Sep', uv: 1244, pv: 72, amt: 100 },
    { name: 'Oct', uv: 1244, pv: 78, amt: 100 },
    { name: 'Nov', uv: 1244, pv: 80, amt: 100 },
    { name: 'Dec', uv: 1244, pv: 85, amt: 100 },
  ];

  useEffect(() => {
    api
      .get('/research/view-all', {
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
        },
      })
      .then((response) => {
        response.data.forEach((upload: any) => {
          let recentUpload: RecentUploadType = {
            title: upload.title,
            authors: upload.authors,
            publishedDate: upload.published_date,
            fileUri: upload.file_uri,
          };

          setRecentUploads((prev) => {
            const isDuplicate = prev?.some(
              (upload) => upload.title === recentUpload.title
            );

            if (!isDuplicate) {
              return [...(prev || []), recentUpload];
            }

            return prev;
          });
        });
        setNumberOfPapers(response.data.length);
      });
  }, []);

  return (
    <>
      <div className="mt-5 space-y-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total No. of Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{numberOfPapers}</div>
              <p className="text-xs text-muted-foreground">+20.1%</p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                No. of Uploads Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
              <p className="text-xs text-muted-foreground">
                +100% from yesterday
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                No. of Uploads Monthly
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">19</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                No. of Uploads Annual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100</div>
              <p className="text-xs text-muted-foreground">
                +100% from last year
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-10 space-y-8 lg:space-y-0">
          <Card x-chunk="dashboard-01-chunk-5" className="w-full col-span-2">
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#ADFA1D" radius={5} />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              {recentUploads?.map((record, index) => (
                <div className="flex items-center gap-4 border-b" key={index}>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      {record.title}
                    </p>
                    <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                      {record.authors} - {record.publishedDate}
                    </p>
                  </div>
                  <div className="ml-auto font-medium underline">View</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
