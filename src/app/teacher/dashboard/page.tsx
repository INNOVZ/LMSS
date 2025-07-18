import { DataTable } from "@/components/dashboard/DataTable";
import { ColumnDef } from "@tanstack/react-table";

type User = {
  id: number;
  name: string;
  email: string;
};

const columns: ColumnDef<User, any>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com" },
];

export default function DashboardPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
