import { createServerFn } from "@tanstack/react-start";

const ADMIN_EMAIL = "abdul@royalroxn.com";
const ADMIN_PASSWORD = "Roxn123@@";

/**
 * Ensures the fixed admin user exists in the auth system and has the admin role.
 * Safe to call from the admin login page - only ever touches the one fixed email.
 */
export const ensureAdminUser = createServerFn({ method: "POST" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { data: existing } = await supabaseAdmin.auth.admin.listUsers();
  let user = existing?.users?.find((u) => u.email?.toLowerCase() === ADMIN_EMAIL);

  if (!user) {
    const { data: created, error } = await supabaseAdmin.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true,
    });
    if (error) throw new Error(error.message);
    user = created.user!;
  }

  await supabaseAdmin
    .from("user_roles")
    .upsert({ user_id: user.id, role: "admin" }, { onConflict: "user_id,role" });

  return { ok: true as const };
});
