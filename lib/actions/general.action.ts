export const dynamic = "force-dynamic";
import { User } from "@/types/database";

// Resolve a base URL for server-side fetches
function getBaseUrl() {
  // Prefer explicit public URL, then NEXTAUTH_URL, then VERCEL_URL, then localhost
  const explicit = process.env.NEXT_PUBLIC_URL || process.env.NEXTAUTH_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";
  if (vercel) return vercel.replace(/\/$/, "");
  return "http://localhost:3000";
}

const BASE_URL = getBaseUrl();

export async function getUsers(): Promise<User[] | []> {
    const res = await fetch(`${BASE_URL}/api/users`, {
        method: 'GET',
        cache: 'no-store',
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await res.json();
    return data.users as User[];
}
export async function getCardData() {
    const res = await fetch(`${BASE_URL}/api/data`, {
        method: 'GET',
        cache: 'no-store',
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();
    return data.projects;
}
export async function getCurrentData(uid:number) {
    const res = await fetch(`${BASE_URL}/api/data`, {
        method: 'GET',
        cache: 'no-store',
        next: { revalidate: 0 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();
    
    const filteredData = data.projects.filter((project:any)=>project.id==uid);
    return filteredData;
}

