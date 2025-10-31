import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Workshops } from "@/components/Workshops";
import { useAudience } from "@/contexts/AudienceContext";

export const WorkshopTabs = () => {
  const { setAudience } = useAudience();

  return (
    <Tabs 
      defaultValue="students" 
      className="w-full"
      onValueChange={(value) => setAudience(value as "students" | "educators" | "executives")}
    >
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
        <TabsTrigger value="students">Students</TabsTrigger>
        <TabsTrigger value="educators">Educators</TabsTrigger>
        <TabsTrigger value="executives">Executives</TabsTrigger>
      </TabsList>
      
      <TabsContent value="students">
        <Workshops />
      </TabsContent>
      
      <TabsContent value="educators">
        <Workshops />
      </TabsContent>
      
      <TabsContent value="executives">
        <Workshops />
      </TabsContent>
    </Tabs>
  );
};
