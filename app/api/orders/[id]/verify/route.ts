import supabase from "@/lib/supabaseServer";

export async function POST(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id: orderId } = await params;
    const body = await req.json();
    const { status } = body as { status: 'confirmed' | 'failed' };

    if (!orderId || !status) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data: orderData, error } = await supabase
      .from("orders")
      .update({ status })
      .eq("id", orderId)
      .select();
    
    if (error) {
      console.error("Supabase update error:", error);
      return Response.json({ error: 'Failed to update order' }, { status: 500 });
    }
    
    return Response.json({ success: true, order: orderData }, { status: 200 });
    
  } catch (e) {
    console.error("Update Order Error:", e);
    return Response.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
