import { site } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-mute">
          © {year} {site.name}
        </p>
        <p className="text-sm text-mute">{site.role}</p>
      </div>
    </footer>
  );
}
