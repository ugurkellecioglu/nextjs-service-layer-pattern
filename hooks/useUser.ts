import usersService from "@/services/users.service"
import { User } from "@/types/user.types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export function useGetUsers() {
  const { data, status, refetch } = useQuery({
    queryKey: [`users`],
    queryFn: () => usersService.getUsers(),
    staleTime: 5000,
    refetchOnWindowFocus: false,
  })

  return { data, status }
}

export function useUpdateUser({ id, name }: { id: string; name: string }) {
  const queryClient = useQueryClient()

  const { data, status, mutate, variables, mutateAsync } = useMutation({
    mutationKey: [`update-user`, id],
    mutationFn: (variables: { id: string; name: string }) =>
      usersService.updateUser({
        name: variables.name,
        id: variables.id,
      }),
    onMutate: async (userPayload) => {
      await queryClient.cancelQueries({ queryKey: ["users"] })

      // Snapshot the previous value
      const previousUsers = queryClient.getQueryData(["users"])

      // Optimistically update to the new value
      queryClient.setQueryData(["users"], (old: User[]) => [
        ...old,
        userPayload,
      ])

      // Return a context object with the snapshotted value
      return { previousUsers }
    },
    // If the mutation fails,
    // use the context returned from onMutate to roll back
    onError: (err, newUser, context) => {
      queryClient.setQueryData(["users"], context?.previousUsers)
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })

  return { data, mutate, mutateAsync, status }
}
