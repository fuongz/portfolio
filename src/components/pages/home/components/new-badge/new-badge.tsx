function NewBadge() {
  return (
    <span className="relative px-1.5 font-mono text-[0.625rem]/[1.125rem] font-medium tracking-widest text-sky-800 uppercase dark:text-sky-300">
      <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30" />
      IN PROGRESS
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
      </svg>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
      </svg>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
      </svg>
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="5"
        height="5"
        viewBox="0 0 5 5"
        className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50"
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z" />
      </svg>
    </span>
  )
}

export { NewBadge }
