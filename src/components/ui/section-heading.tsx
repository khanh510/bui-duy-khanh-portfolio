type SectionHeadingProps = {
  index: string;
  title: string;
  description: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 grid gap-4 border-t border-[var(--border)] pt-5 md:grid-cols-[8rem_1fr] md:gap-8 lg:mb-14">
      <p className="font-mono text-sm font-semibold text-[var(--accent)]">{index}</p>
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[var(--heading)] sm:text-4xl">{title}</h2>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{description}</p>
      </div>
    </div>
  );
}
