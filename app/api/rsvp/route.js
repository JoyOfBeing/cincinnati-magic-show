import { supabase } from "../../../lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, phone, arrival_time } = await request.json();

  if (!name || !email) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("magic_show_rsvp")
    .insert([{ event: "BLINK_Cincinnati", name, email, phone, arrival_time }])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return Response.json({ error: "Failed to save RSVP" }, { status: 500 });
  }

  // Notify Nicole
  try {
    await resend.emails.send({
      from: "Magic Show <onboarding@resend.dev>",
      to: "nicole@jumpsuitagency.com",
      subject: `New RSVP: ${name}`,
      text: [
        `New Magic Show Cincinnati RSVP!`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Preferred Time: ${arrival_time || "Not specified"}`,
        ``,
        `— The Magic Show Bot`,
      ].join("\n"),
    });
  } catch (err) {
    console.error("Email notification failed:", err);
  }

  return Response.json({ success: true, id: data[0]?.id });
}
