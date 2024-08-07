import { Skeleton } from "@/components/ui/skeleton"

export default function UserListLoading() {
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
            {Array.from({ length: 20 }).map((_, index) => (
              <tr
                key={index}
                className="border-b border-muted/40 last:border-b-0"
              >
                <td className="px-4 py-3">
                  <Skeleton className="w-[40px] h-[40px] rounded-2xl" />
                </td>
                <td className="px-4 py-3">
                  <Skeleton className="w-[150px] h-[20px] rounded-2xl" />
                </td>
                <td className="px-4 py-3">
                  <Skeleton className="w-[200px] h-[20px] rounded-2xl" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
