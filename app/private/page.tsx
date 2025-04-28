import { redirect } from "next/navigation";
import { logout } from "../login/action";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function PrivatePage() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-6">
          <div className="text-center space-y-2">
            <p className="text-xl font-semibold">Hello {data.user.email}</p>
            <p>This is a private page.</p>
            <p>You can only see this if you are logged in.</p>
          </div>
          <form>
            <Button formAction={logout} className="w-full">
              Logout
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
