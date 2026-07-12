"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getComments, postComment, CommentType } from "@/lib/actions/comments.action";
import { Send, MessageSquare, Loader2, Reply, ShieldCheck } from "lucide-react";
import Link from "next/link";

const ADMIN_EMAIL = "hardikjain2030@gmail.com";

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

// --- Recursive Comment Item Component ---
const CommentItem = ({
  comment,
  replies,
  allComments,
  projectId,
  session,
  status,
  onReplyPost
}: {
  comment: CommentType;
  replies: CommentType[];
  allComments: CommentType[];
  projectId: number;
  session: any;
  status: string;
  onReplyPost: (content: string, parentId: string) => Promise<void>;
}) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isPending, startTransition] = useTransition();

  const isAdmin = comment.user_email === ADMIN_EMAIL;

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim()) return;

    startTransition(async () => {
      await onReplyPost(replyContent, comment.id);
      setReplyContent("");
      setIsReplying(false);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-3 group w-full"
    >
      <div className="flex gap-4 sm:gap-5 w-full">
        {/* Avatar */}
        <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border ${isAdmin ? 'border-accentPrimary shadow-[0_0_10px_rgba(217,92,55,0.5)]' : 'border-borderSubtle'} bg-background`}>
          {renderAvatar(comment.user_image, comment.user_name || "A")}
        </div>

        <div className="flex flex-col w-full">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className={`font-bold text-sm sm:text-base ${isAdmin ? 'text-accentPrimary' : 'text-textPrimary'}`}>
              {comment.user_name}
            </span>
            
            {isAdmin && (
              <span className="flex items-center gap-1 bg-accentPrimary/10 text-accentPrimary border border-accentPrimary/20 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={12} /> Creator
              </span>
            )}

            <span className="text-xs text-textMuted font-medium ml-auto sm:ml-0">
              {new Date(comment.created_at).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>

          {/* Content */}
          <div className={`rounded-2xl rounded-tl-none p-4 mt-1 text-sm leading-relaxed shadow-sm ${isAdmin ? 'bg-accentPrimary/5 border border-accentPrimary/20 text-textPrimary' : 'bg-surface border border-borderSubtle text-textPrimary'}`}>
            {comment.content}
          </div>

          {/* Actions */}
          <div className="mt-2 flex items-center gap-4">
            <button 
              onClick={() => setIsReplying(!isReplying)}
              className="flex items-center gap-1.5 text-xs font-bold text-textMuted hover:text-accentPrimary transition-colors"
            >
              <Reply size={14} /> {isReplying ? "Cancel" : "Reply"}
            </button>
          </div>

          {/* Reply Input Box */}
          <AnimatePresence>
            {isReplying && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-3"
              >
                {status === "authenticated" && session?.user ? (
                  <form onSubmit={handleReplySubmit} className="flex flex-col gap-3 bg-surface/30 p-3 rounded-2xl border border-borderSubtle">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 shrink-0 rounded-full overflow-hidden border border-borderSubtle bg-background">
                        {renderAvatar(session.user.image, session.user.name || "A")}
                      </div>
                      <textarea
                        value={replyContent}
                        onChange={(e) => setReplyContent(e.target.value)}
                        placeholder={`Replying to ${comment.user_name}...`}
                        className="w-full bg-background border border-borderSubtle rounded-xl p-3 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:border-accentPrimary/50 focus:ring-1 focus:ring-accentPrimary/50 transition-all resize-none min-h-[60px]"
                        autoFocus
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={!replyContent.trim() || isPending}
                        className="bg-accentPrimary hover:bg-[#B84020] disabled:bg-borderSubtle disabled:cursor-not-allowed text-white px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-all shadow-sm"
                      >
                        {isPending ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                        Reply
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-surface/50 border border-borderSubtle rounded-xl p-4 text-center">
                    <p className="text-xs text-textMuted mb-2">Login to reply</p>
                    <Link href={`/login/${projectId}`} className="text-accentPrimary font-bold text-xs hover:underline">
                      Sign in here
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Render Nested Replies */}
          {replies.length > 0 && (
            <div className="mt-4 pl-4 sm:pl-8 border-l-2 border-borderSubtle/50 flex flex-col gap-5">
              {replies.map((reply) => (
                <CommentItem
                  key={reply.id}
                  comment={reply}
                  replies={allComments.filter(c => c.parent_id === reply.id)}
                  allComments={allComments}
                  projectId={projectId}
                  session={session}
                  status={status}
                  onReplyPost={onReplyPost}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

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

  const handlePost = async (content: string, parentId: string | null = null) => {
    if (!content.trim() || !session?.user) return;

    const tempComment: CommentType = {
      id: Math.random().toString(),
      created_at: new Date().toISOString(),
      project_id: projectId,
      user_email: session.user.email || "",
      user_name: session.user.name || "Anonymous",
      user_image: session.user.image || "",
      content: content.trim(),
      parent_id: parentId,
    };

    // Optimistic Update
    setComments((prev) => [tempComment, ...prev]);

    try {
      await postComment(
        projectId,
        tempComment.user_email,
        tempComment.user_name,
        tempComment.user_image,
        tempComment.content,
        parentId
      );
    } catch (error) {
      console.error("Failed to post comment", error);
      // Revert on failure
      setComments((prev) => prev.filter((c) => c.id !== tempComment.id));
    }
  };

  const handleTopLevelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      await handlePost(newComment);
      setNewComment("");
    });
  };

  // Build the tree for rendering
  const topLevelComments = comments.filter((c) => !c.parent_id);

  return (
    <div className="w-full mt-12 glass-card rounded-3xl p-6 sm:p-8 flex flex-col gap-8">
      <div className="flex items-center gap-3 border-b border-borderSubtle pb-4">
        <MessageSquare className="text-accentPrimary" size={24} />
        <h3 className="text-2xl font-fraunces font-bold text-textPrimary">Community Discussion</h3>
        <span className="ml-auto bg-surface/50 border border-borderSubtle px-3 py-1 rounded-full text-sm font-semibold text-textMuted">
          {comments.length}
        </span>
      </div>

      {/* Main Input Section */}
      <div className="bg-surface/50 border border-borderSubtle rounded-2xl p-4 sm:p-6 shadow-sm">
        {status === "authenticated" && session.user ? (
          <form onSubmit={handleTopLevelSubmit} className="flex flex-col gap-4">
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
      <div className="flex flex-col gap-8 mt-4">
        {isLoading ? (
          <div className="flex justify-center p-8">
            <Loader2 className="animate-spin text-textMuted" size={32} />
          </div>
        ) : topLevelComments.length === 0 ? (
          <div className="text-center py-12 text-textMuted bg-background/50 border border-borderSubtle border-dashed rounded-2xl">
            <MessageSquare size={32} className="mx-auto mb-3 opacity-20" />
            <p className="font-medium">No comments yet. Be the first to start the discussion!</p>
          </div>
        ) : (
          <AnimatePresence>
            {topLevelComments.map((comment) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                replies={comments.filter(c => c.parent_id === comment.id)}
                allComments={comments}
                projectId={projectId}
                session={session}
                status={status}
                onReplyPost={handlePost}
              />
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
