import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-28 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-9 pb-12">
      <p className="font-mono text-xs text-text-low">
        © 2026 {profile.name} 
      </p>
      <p className="font-mono text-xs text-text-low">
        <a href={`mailto:${profile.email}`} className="text-text-mid hover:text-mercury">
          Email
        </a>{" "}
        ·{" "}
        <a href={`tel:${profile.phone}`} className="text-text-mid hover:text-mercury">
          Call
        </a>{" "}
        ·{" "}
        <a href={profile.linkedin} className="text-text-mid hover:text-mercury" target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        ·{" "}
        <a href={profile.github} className="text-text-mid hover:text-mercury" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  );
}
