'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Overview() {
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
              <div className="text-2xl font-bold">200</div>
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
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
                ]}
                height={450}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Research Title
                  </p>
                  <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                    Author - Published Date
                  </p>
                </div>
                <div className="ml-auto font-medium underline">View</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Research Title
                  </p>
                  <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                    Author - Published Date
                  </p>
                </div>
                <div className="ml-auto font-medium underline">View</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Research Title
                  </p>
                  <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                    Author - Published Date
                  </p>
                </div>
                <div className="ml-auto font-medium underline">View</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Research Title
                  </p>
                  <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                    Author - Published Date
                  </p>
                </div>
                <div className="ml-auto font-medium underline">View</div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Research Title
                  </p>
                  <p className="text-sm text-muted-foreground text-ellipsis overflow-hidden">
                    Author - Published Date
                  </p>
                </div>
                <div className="ml-auto font-medium underline">View</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
