import type { UserType } from "./user.types";

export type DataUserTableProps = {
  onCreateUser: () => void;
  users: UserType[]
};