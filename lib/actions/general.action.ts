export const dynamic = "force-dynamic";
import { User } from "@/types/database";

export async function getUsers(): Promise<User | null> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    const data = await res.json();
    return data.users;
}
export async function getCardData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data`, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();
    return data.projects;
}
export async function getCurrentData(uid:number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/data/`, {
        method: 'GET',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch projects');
    }

    const data = await res.json();
    
    const filteredData = data.projects.filter((project:any)=>project.id==uid);
    return filteredData;
}

