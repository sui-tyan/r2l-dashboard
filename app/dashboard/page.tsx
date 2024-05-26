import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  return (
    <>
      <h1 className="font-bold text-2xl mb-3">Dashboard</h1>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="bg-[#F4F4F5]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="repository">Repository</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="upload">Change your password here.</TabsContent>

        <TabsContent value="repository">
          Make changes to your account here.
        </TabsContent>
      </Tabs>
    </>
  );
}
