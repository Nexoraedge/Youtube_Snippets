"use server";
import supabaseServer from "@/lib/supabaseServer";
import { revalidatePath } from "next/cache";

export type CommentType = {
  id: string;
  created_at: string;
  project_id: number;
  user_email: string;
  user_name: string;
  user_image: string;
  content: string;
};

export async function getComments(projectId: number): Promise<CommentType[]> {
  const { data, error } = await supabaseServer
    .from("comments")
    .select("*")
    .eq("project_id", projectId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
  return data as CommentType[];
}

export async function postComment(
  projectId: number,
  userEmail: string,
  userName: string,
  userImage: string,
  content: string
) {
  if (!userEmail || !content.trim()) {
    throw new Error("Missing required fields");
  }

  const { data, error } = await supabaseServer.from("comments").insert([
    {
      project_id: projectId,
      user_email: userEmail,
      user_name: userName,
      user_image: userImage,
      content: content.trim(),
    },
  ]);

  if (error) {
    console.error("Error posting comment:", error);
    throw new Error("Failed to post comment");
  }

  // Revalidate the page so the new comment appears for everyone
  revalidatePath(`/${projectId}`);
  return data;
}
