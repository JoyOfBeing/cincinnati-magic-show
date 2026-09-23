import { supabase } from "../../../lib/supabase";

export async function POST(request) {
  const { name, email, phone } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("magic_show_rsvp")
    .insert([{ event: "BLINK_Cincinnati", name, email, phone }])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return Response.json({ error: "Failed to save RSVP" }, { status: 500 });
  }

  return Response.json({ success: true, id: data[0]?.id });
}
