import React, { useState, useEffect } from "react";
import { User } from "@/types/types";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/columns";

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-2">
        <div className="text-4xl font-semibold subpixel-antialiased">
          Users List
        </div>
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
};

export default HomePage;
