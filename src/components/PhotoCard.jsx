import { memo } from 'react'

function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-card">
      <img
        src={`https://picsum.photos/id/${photo.id}/600/400`}
        alt={`Photo by ${photo.author}`}
        width="600"
        height="400"
        loading="lazy"
        className="aspect-[3/2] w-full bg-line object-cover"
      />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="truncate text-sm font-medium">{photo.author}</p>
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-pressed={isFavourite}
          aria-label={`Favourite photo by ${photo.author}`}
          className={`flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full hover:text-heart focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heart ${
            isFavourite ? 'text-heart' : 'text-muted'
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            aria-hidden="true"
            className="size-5"
          >
            <path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 6.7a4.5 4.5 0 0 1 8 2.8c0 6.1-8 11-8 11z" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default memo(PhotoCard)
