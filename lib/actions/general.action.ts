"use server";
import { User } from "@/types/database";
import supabaseServer from "@/lib/supabaseServer";

export async function getUsers(): Promise<User[] | []> {
    const { data, error } = await supabaseServer.from('users').select('*');
    if (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users');
    }
    return (data || []) as User[];
}

export async function getCardData() {
    const { data, error } = await supabaseServer
        .from("projects")
        .select("*")
        .order('id', { ascending: false });

    if (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
    return data || [];
}

export async function getCurrentData(uid: number) {
    if (isNaN(uid)) {
        return [];
    }

    const { data, error } = await supabaseServer
        .from("projects")
        .select("*")
        .eq("id", uid);

    if (error) {
        console.error('Error fetching project:', error);
        throw new Error('Failed to fetch projects');
    }
    return data || [];
}

