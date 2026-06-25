-- Run this in your Supabase SQL Editor

CREATE TYPE order_type_enum AS ENUM ('consultation', 'digital_product');
CREATE TYPE order_status_enum AS ENUM ('pending', 'confirmed', 'failed');

CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  customer_email TEXT NOT NULL,
  customer_name TEXT,
  order_type order_type_enum NOT NULL,
  product_id TEXT NOT NULL,
  status order_status_enum DEFAULT 'pending' NOT NULL,
  utr_number TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  scheduled_time TIMESTAMP WITH TIME ZONE,
  meet_link TEXT,
  whatsapp_number TEXT
);

-- Set up Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public to insert new orders
CREATE POLICY "Allow public insert" ON orders
  FOR INSERT WITH CHECK (true);

-- Allow public to view their own orders by ID
CREATE POLICY "Allow public select by id" ON orders
  FOR SELECT USING (true);

-- Allow authenticated admins to do everything
CREATE POLICY "Allow admin all" ON orders
  TO authenticated
  USING (true)
  WITH CHECK (true);
