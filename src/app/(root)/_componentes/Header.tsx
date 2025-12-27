"use client";

import { useUser, SignedIn } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Link from "next/link";
import { Blocks, Code2, Sparkles } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import RunButton from "./RunButton";
import HeaderProfileBtn from "./HeaderProfileBtn";

export default function Header() {
  const { user, isLoaded } = useUser();

  const convexUser = useQuery(
    api.users.getUser,
    user ? { userId: user.id } : "skip"
  );

  if (!isLoaded) return null;

  return (
    <div className="relative z-10">
      <div className="flex items-center lg:justify-between justify-center bg-[#0a0a0f]/80 backdrop-blur-xl p-6 mb-4 rounded-lg">
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10">
              <Blocks className="size-6 text-blue-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                CodeCraft
              </span>
              <span className="text-xs text-blue-400/60">
                Interactive Code Editor
              </span>
            </div>
          </Link>

          <nav className="flex items-center space-x-1">
            <Link
              href="/snippets"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-gray-300 bg-gray-800/50 border border-gray-800"
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm">Snippets</span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeSelector />
          <LanguageSelector hasAccess={Boolean(convexUser?.isPro)} />

          {!convexUser?.isPro && (
            <Link
              href="/pricing"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg border border-amber-500/20"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400">Pro</span>
            </Link>
          )}

          <SignedIn>
            <RunButton />
          </SignedIn>

          <HeaderProfileBtn />
        </div>
      </div>
    </div>
  );
}
