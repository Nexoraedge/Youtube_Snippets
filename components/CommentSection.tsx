"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getComments, postComment, CommentType } from "@/lib/actions/comments.action";
import { Send, MessageSquare, Loader2 } from "lucide-react";
import Link from "next/link";

export default function CommentSection({ projectId }: { projectId: number }) {
  const { data: session, status } = useSession();
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getComments(projectId);
      setComments(data);
      setIsLoading(false);
    };
    fetchComments();
  }, [projectId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !session?.user) return;

    const tempComment: CommentType = {
      id: Math.random().toString(),
      created_at: new Date().toISOString(),
      project_id: projectId,
      user_email: session.user.email || "",
      user_name: session.user.name || "Anonymous",
      user_image: session.user.image || "",
      content: newComment.trim(),
    };

    // Optimistic UI update
    setComments((prev) => [tempComment, ...prev]);
    setNewComment("");

    startTransition(async () => {
      try {
        await postComment(
          projectId,
          tempComment.user_email,
          tempComment.user_name,
          tempComment.user_image,
          tempComment.content
        );
      } catch (error) {
        console.error("Failed to post comment", error);
        // Revert on failure
        setComments((prev) => prev.filter((c) => c.id !== tempComment.id));
      }
    });
  };

  const renderAvatar = (image: string | null | undefined, name: string) => {
    if (image) {
      return (
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
          unoptimized
        />
      );
    }
    return (
      <div className="w-full h-full bg-accentPrimary flex items-center justify-center text-white font-bold text-lg uppercase">
        {name.charAt(0)}
      </div>
    );
  };

  return (
    <div className="w-full mt-12 glass-card rounded-3xl p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-borderSubtle pb-4">
        <MessageSquare className="text-accentPrimary" size={24} />
        <h3 className="text-2xl font-fraunces font-bold text-textPrimary">Community Discussion</h3>
        <span className="ml-auto bg-surface/50 border border-borderSubtle px-3 py-1 rounded-full text-sm font-semibold text-textMuted">
          {comments.length}
        </span>
      </div>

      {/* Input Section */}
      <div className="bg-surface/50 border border-borderSubtle rounded-2xl p-4 sm:p-6 shadow-sm">
        {status === "authenticated" && session.user ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 rounded-full overflow-hidden border border-borderSubtle bg-background">
                {renderAvatar(session.user.image, session.user.name || "A")}
              </div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Ask a question or share your thoughts..."
                className="w-full bg-background border border-borderSubtle rounded-xl p-4 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accentPrimary/50 focus:ring-1 focus:ring-accentPrimary/50 transition-all resize-none min-h-[100px]"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!newComment.trim() || isPending}
                className="bg-textPrimary hover:bg-black disabled:bg-borderSubtle disabled:cursor-not-allowed text-surface px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
              >
                {isPending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                Post Comment
              </button>
            </div>
          </form>
        ) : status === "loading" ? (
          <div className="flex justify-center p-4">
            <Loader2 className="animate-spin text-textMuted" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-6 gap-4">
            <p className="text-textMuted font-medium">Join the community to leave a comment!</p>
            <Link
              href={`/login/${projectId}`}
              className="bg-accentPrimary hover:bg-[#B84020] text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md hover:-translate-y-0.5"
            >
              Login to Comment
            </Link>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="flex flex-col gap-6 mt-4">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="animate-spin text-textMuted" size={32} />
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-12 text-textMuted bg-background/50 border border-borderSubtle border-dashed rounded-2xl">
            <MessageSquare size={32} className="mx-auto mb-3 opacity-20" />
            <p className="font-medium">No comments yet. Be the first to start the discussion!</p>
          </div>
        ) : (
          <AnimatePresence>
            {comments.map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4 sm:gap-5 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border border-borderSubtle bg-background">
                  {renderAvatar(comment.user_image, comment.user_name || "A")}
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-textPrimary text-sm sm:text-base">
                      {comment.user_name}
                    </span>
                    <span className="text-xs text-textMuted font-medium">
                      {new Date(comment.created_at).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="bg-surface border border-borderSubtle rounded-2xl rounded-tl-none p-4 mt-1 text-sm text-textPrimary leading-relaxed shadow-sm">
                    {comment.content}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
