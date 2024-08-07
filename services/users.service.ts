import { api } from "@/lib/axios"
import { Response } from "@/types/axios.types"
import { User } from "@/types/user.types"

class UsersService {
  async getUsers(): Promise<Response<User[]>> {
    try {
      const res = await api.get("/users")
      return {
        success: true,
        data: res.data,
      }
    } catch (error: any) {
      return {
        success: false,
        data: error.message,
      }
    }
  }

  async updateUser({
    id,
    name,
  }: {
    id: string
    name: string
  }): Promise<Response<User>> {
    try {
      const res = await api.put(`/users/${id}`, {
        id,
        name,
      })
      return {
        success: true,
        data: res.data,
      }
    } catch (error: any) {
      return {
        success: false,
        data: error.message,
      }
    }
  }
}

export default new UsersService()
