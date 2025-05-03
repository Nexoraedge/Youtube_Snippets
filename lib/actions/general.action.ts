import { User } from "@/types/database";

export async function getUsers(): Promise<User | null> {
    const res = await fetch('/api/users', {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await res.json();
    return data.users;
}
export async function getCardData() {
    const res = await fetch('/api/data', {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();
    return data.projects;
}
export async function isAuthenticated() {
  const user =await getUsers();
  return !! user;
}