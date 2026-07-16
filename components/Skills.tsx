import { skillGroups } from "@/lib/data";
import { skillIcons, fallbackSkillIcon } from "@/lib/skillIcons";

export default function Skills() {
  return (
    <section id="skills" className="pt-24">
      <div className="eyebrow mb-4">Toolbox</div>
      <h2 className="mb-8 font-display text-[30px] font-semibold tracking-tight">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className="glass p-6">
            <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-wider text-warm">
              {group.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const { Icon, color } = skillIcons[item] ?? fallbackSkillIcon;
                return (
                  <span
                    key={item}
                    className="chip flex items-center gap-1.5"
                  >
                    <Icon size={13} style={{ color }} />
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}