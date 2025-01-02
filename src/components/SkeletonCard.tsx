import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";
import { Separator } from "./ui/separator";

const SkeletonCard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-xl font-semibold subpixel-antialiased">
        User Details
      </div>
      <Card className="w-full mx-auto mt-4">
        <CardHeader className="relative bg-gray-300 rounded-t-xl min-h-32">
          <div className="absolute left-8 top-16 bg-white py-6 pl-8 pr-12 rounded-lg">
            <div className="flex flex-row items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage />
                <AvatarFallback>
                  <Skeleton className="h-16 w-16" />
                </AvatarFallback>
              </Avatar>
              <div className="grid items-start gap-2">
                <CardTitle>
                  <Skeleton className="h-4  w-[250px]-md" />
                </CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Skeleton className="h-4 w-[150px]" />
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 pt-20 pl-8">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <div className="flex items-start gap-2">
            <Skeleton className="h-4 w-[250px]" />
          </div>

          <Separator className="mt-4 mb-2" />
          <div className="">
            <div className="text-xs text-muted-foreground mb-2">
              Company Details
            </div>
            <div className="flex items-start gap-2">
              <div className="grid items-start gap-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkeletonCard;
