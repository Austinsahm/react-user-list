import SkeletonCard from "@/components/SkeletonCard";
import UserProfileCard from "@/components/UserProfileCard";
import { User } from "@/types/types";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <SkeletonCard />;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="text-xl font-semibold subpixel-antialiased">
        User Details
      </div>
      <UserProfileCard user={user} />
    </div>
  );
};

export default UserDetailsPage;
