import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="pt-24">
      <div className="eyebrow mb-4">Background</div>
      <h2 className="mb-8 font-display text-[30px] font-semibold tracking-tight">
        Education &amp; Certification
      </h2>

      <div className="flex flex-wrap gap-6">
        {education.map((item) => (
          <div key={item.title} className="glass min-w-[280px] flex-1 p-7">
            <h3 className="mb-1.5 font-display text-lg font-semibold">{item.title}</h3>
            <div className="mb-3.5 font-mono text-xs text-text-low">{item.meta}</div>
            {item.cgpa && (
              <div className="font-display text-[28px] font-bold text-mercury">
                {item.cgpa}
                <span className="block font-mono text-[11px] font-normal text-text-low">
                  CGPA out of 10
                </span>
              </div>
            )}
            {item.detail && (
              <p className="text-[13.5px] leading-[1.6] text-text-mid">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
