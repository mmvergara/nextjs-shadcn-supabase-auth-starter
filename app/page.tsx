import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-8 p-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Next.js + Shadcn + Supabase Auth Starter
        </h1>
        <p className="text-muted-foreground text-lg">
          A simple starter template for authentication.
        </p>
      </div>

      <div className="flex gap-4">
        <Link href="/login">
          <Button>Login</Button>
        </Link>
        <Link href="/private">
          <Button variant="outline">Private Page</Button>
        </Link>
      </div>
    </div>
  );
}
