-- Run this in your Supabase SQL Editor to add reply support

ALTER TABLE comments 
ADD COLUMN parent_id UUID REFERENCES comments(id) ON DELETE CASCADE;
