import { createSupabaseServerClient } from "@/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "../login/action";

export default async function PrivatePage() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
      <form>
        <button formAction={logout}>Logout</button>
      </form>
      <p>This is a private page.</p>
      <p>You can only see this if you are logged in.</p>
    </div>
  );
}
