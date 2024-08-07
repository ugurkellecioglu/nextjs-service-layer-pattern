import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User } from "@/types/user.types"

export default function UserList({ data }: { data: User[] }) {
  return (
    <div className="max-w-2xl px-4 md:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted text-muted-foreground">
              <th className="px-4 py-3 text-left">Avatar</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr
                key={user.id}
                className="border-b border-muted/40 last:border-b-0"
              >
                <td className="px-4 py-3">
                  <Avatar>
                    <AvatarFallback>
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </td>
                <td className="px-4 py-3 font-medium">{user.name}</td>
                <td className="px-4 py-3">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
