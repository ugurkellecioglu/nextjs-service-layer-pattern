"use server"

import usersService from "@/services/users.service"

export const getUsers = async () => {
  return usersService.getUsers()
}
