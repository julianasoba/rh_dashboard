import { fetchUsers } from "@/services/users/createUser";
import type { UserType } from "@/types/user.types";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery<UserType[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}