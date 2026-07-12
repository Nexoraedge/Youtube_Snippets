-- Run this in your Supabase SQL Editor

CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  project_id NUMERIC NOT NULL,
  user_email TEXT NOT NULL,
  user_name TEXT NOT NULL,
  user_image TEXT,
  content TEXT NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow public to read all comments
CREATE POLICY "Allow public read" ON comments
  FOR SELECT USING (true);

-- Allow logged-in users to insert their own comments
CREATE POLICY "Allow authenticated insert" ON comments
  FOR INSERT 
  TO authenticated
  WITH CHECK (true);
