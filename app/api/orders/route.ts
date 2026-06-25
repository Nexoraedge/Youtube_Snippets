import supabase from "@/lib/supabaseServer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      customer_name,
      customer_email,
      utr_number,
      order_type,
      product_id,
      amount
    } = body as Record<string, unknown>;

    if (!customer_name || !customer_email || !utr_number || !product_id) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const insertData = {
      customer_name,
      customer_email,
      utr_number,
      order_type,
      product_id,
      amount,
      status: 'pending'
    };

    const { data: orderData, error: insertError } = await supabase
      .from("orders")
      .insert([insertData])
      .select(); 
    
    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return Response.json({ 
        error: 'Failed to create order', 
        details: insertError.message 
      }, { status: 500 });
    }
    
    return Response.json({
      success: true,
      message: "Order created successfully",
      data: orderData
    }, { status: 201 });
    
  } catch (e) {
    console.error("API Error:", e);
    return Response.json({ 
      error: "An unexpected error occurred", 
      success: false 
    }, { status: 500 });
  }
}
