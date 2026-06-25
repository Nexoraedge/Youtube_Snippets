import supabase from "@/lib/supabaseServer";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: orderId } = await params;

    if (!orderId) {
      return Response.json({ error: "Missing order ID" }, { status: 400 });
    }

    const { data: orderData, error } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();
    
    if (error) {
      console.error("Supabase select error:", error);
      return Response.json({ error: 'Order not found' }, { status: 404 });
    }
    
    return Response.json({ order: orderData }, { status: 200 });
    
  } catch (e) {
    console.error("GET Order Error:", e);
    return Response.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
