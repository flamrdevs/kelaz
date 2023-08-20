import { NavLinks } from "./components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container max-w-screen-sm mx-auto min-h-[100dvh]">
      <header className="p-2">
        <div className="flex items-center justify-between gap-1 px-5 py-2.5 bg-neutral-2 rounded-xl shadow-md">
          <NavLinks />
        </div>
      </header>

      <main className="p-2">
        <div className="px-5 py-2.5 bg-neutral-2 rounded-xl shadow-md">{children}</div>
      </main>
    </main>
  );
}
