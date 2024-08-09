import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Toaster } from '@/components/ui/toaster';
import Overview from '@/app/_pages/Overview';
import Repository from '@/app/_pages/Repository';
import Upload from '@/app/_pages/Upload';

export default function Dashboard() {
  return (
    <>
      <Toaster />
      <h1 className="font-bold text-2xl mb-3">Dashboard</h1>
      <Tabs defaultValue="overview" className="">
        <TabsList className="bg-[#F4F4F5]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="repository">Repository</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Overview />
        </TabsContent>
        <TabsContent value="upload">
          <Upload />
        </TabsContent>
        <TabsContent value="repository">
          <Repository />
        </TabsContent>
      </Tabs>
    </>
  );
}
