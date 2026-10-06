function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="inline-flex rounded-md bg-coral/10 px-4 py-1.5 text-xs font-bold lowercase tracking-[0.16em] text-coral">
        -- {eyebrow}
      </span>
      <h2 className="mt-6 font-display text-4xl font-black leading-none text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
