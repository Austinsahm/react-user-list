import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AtSign, Mail, Phone, Globe, MapPin, Briefcase } from "lucide-react";
import { User } from "@/types/types";
import { Separator } from "./ui/separator";

export default function UserProfileCard({ user }: { user: User }) {
  return (
    <Card className="w-full mx-auto mt-4">
      <CardHeader className="relative bg-gray-300 rounded-t-xl min-h-32">
        <div className="absolute left-8 top-16 bg-white py-6 pl-8 pr-12 rounded-lg">
          <div className="flex flex-row items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
                alt={user.name}
              />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{user.name}</CardTitle>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <AtSign className="w-4 h-4" />
                {user.username}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-4 pt-20 pl-8">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-muted-foreground" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {user.website}
          </a>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
          <address className="not-italic">
            {user.address.street}, {user.address.suite}
            <br />
            {user.address.city}, {user.address.zipcode}
          </address>
        </div>

        <Separator className="mt-4 mb-2" />
        <div className="">
          <div className="text-xs text-muted-foreground mb-2">
            Company Details
          </div>
          <div className="flex items-start gap-2">
            <Briefcase className="w-4 h-4 text-muted-foreground mt-1" />
            <div>
              <p className="font-medium">{user.company.name}</p>
              <p className="text-sm text-muted-foreground">
                {user.company.catchPhrase}
              </p>
              <p className="text-sm text-muted-foreground">{user.company.bs}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
