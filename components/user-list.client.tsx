"use client"

import { useGetUsers } from "@/hooks/useUser"
import UserList from "./user-list"
import UserListLoading from "./user-list-loading"

export default function UserListClient() {
  const { data, status } = useGetUsers()

  if (status === "pending") return <UserListLoading />

  if (data?.success) {
    return <UserList data={data.data} />
  } else if (!data?.success) {
    return <div>Error: {data?.data}</div>
  }
}
