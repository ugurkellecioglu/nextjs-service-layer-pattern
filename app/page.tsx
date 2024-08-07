import UserListClient from "@/components/user-list.client"

export default async function Home() {
  return (
    <main className="flex">
      <UserListClient />
    </main>
  )
}
