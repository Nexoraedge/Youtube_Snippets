import supabase from "@/lib/supabaseServer";

export async function GET() {
  try {
    const { data: orders, error } = await supabase
      .from("orders")
      .select("*")
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Supabase select error:", error);
      return Response.json({ error: 'Failed to fetch orders' }, { status: 500 });
    }
    
    return Response.json({ orders }, { status: 200 });
    
  } catch (e) {
    console.error("Fetch Orders Error:", e);
    return Response.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
