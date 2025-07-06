import Link from 'next/link'

export const Box = ({
  href,
  category,
  date,
  title,
  summary,
}: {
  href: string
  category: string
  date: string
  title: string
  summary: string
}) => {
  return (
    <Link href={href} className="no-underline">
      <article className="border-border group cursor-pointer border-2 transition-all hover:shadow-[4px_4px_0px_0px_var(--border)]">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold uppercase">{category}</span>
            <div className="minor-text">
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
          </div>
          <h3 className="decoration-4 underline-offset-4 group-hover:underline">{title}</h3>

          <h4>{summary}</h4>
        </div>
      </article>
    </Link>
  )
}
