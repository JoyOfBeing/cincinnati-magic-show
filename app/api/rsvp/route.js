import { supabase } from "../../../lib/supabase";

export async function POST(request) {
  const { name, email, guests } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("cincinnati_magic_show_rsvps")
    .insert([{ name, email, guests: parseInt(guests, 10) }]);

  if (error) {
    console.error("Supabase error:", error);
    return Response.json({ error: "Failed to save RSVP" }, { status: 500 });
  }

  return Response.json({ success: true });
}
