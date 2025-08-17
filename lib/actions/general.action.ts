export const dynamic = "force-dynamic";
import { User } from "@/types/database";

export async function getUsers(): Promise<User[] | []> {
    const res = await fetch(`/api/users`, {
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
    const res = await fetch(`/api/data`, {
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
    const res = await fetch(`/api/data/`, {
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

