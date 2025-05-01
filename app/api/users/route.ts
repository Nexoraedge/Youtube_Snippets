// app/api/users/route.ts
import supabase from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username } = body;

    // Validate input
    if (!email || !username) {
      return NextResponse.json(
        { error: 'Email and username are required' },
        { status: 400 }
      );
    }

    // Step 1: Check if user exists
    const { data: existingUser, error: fetchError } = await supabase
      .from('Users')
      .select('id, email')
      .eq('email', email)
      .single();


    if (fetchError && fetchError.code !== 'PGRST116') {
      console.error('Error checking for existing user:', fetchError);
      return NextResponse.json(
        { error: 'Failed to check if user exists' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        {
          success: true,
          message: 'User already exists',
          user: { id: existingUser.id, email: existingUser.email }
        },
        { status: 200 }
      );
    }

    // Step 2: Insert user
    console.log('Attempting to insert user with data:', { email, username });
    const { data, error: insertError } = await supabase
      .from('Users')
      .insert([{ email, username }])
      .select();

    if (insertError) {
      console.error('Detailed insert error:', JSON.stringify(insertError, null, 2));
      return NextResponse.json({ error: 'Failed to create user', details: insertError }, { status: 500 });
    }

    if (insertError) {
      console.error('Error creating user:', insertError);
      return NextResponse.json(
        { error: 'Failed to create user' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User added successfully',
        user: data?.[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Unexpected error in user creation:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
export async function GET() { 
  const {data , error} = await supabase.from("Users").select("*")

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }

  return NextResponse.json({ users: data }, { status: 200 });
}