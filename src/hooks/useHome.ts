import { useUsers } from "./useUsers";
import { useMemo } from "react";

type DayKey = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

const todayKey = (): DayKey => {
  const days: DayKey[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[new Date().getDay()];
};

export function useHome() {
  const { data: users, isLoading, isError } = useUsers();

  const stats = useMemo(() => {
    if (!users) return null;

    const today = todayKey();
    const activeUsers = users.filter(u => u.active);

    const workingToday = activeUsers.filter(
      u => !u.workSchedule?.workDays?.includes(today)
    );
    const offToday = activeUsers.filter(
      u => u.workSchedule?.workDays?.includes(today)
    );

    const byDepartment = {
      kt: workingToday.filter(u => u.department === "kitchen"),
      wt: workingToday.filter(u => u.department === "waitress"),
      br: workingToday.filter(u => u.department === "bar"),
    };

    const recentUsers = [...users]
      .sort((a, b) => b.createdAt?.toMillis() - a.createdAt?.toMillis())
      .slice(0, 5);

    return {
      total: activeUsers.length,
      workingToday,
      offToday,
      byDepartment,
      recentUsers,
    };
  }, [users]);

  return { stats, isLoading, isError };
}