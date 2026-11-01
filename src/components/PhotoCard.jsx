import { memo, useState } from 'react'

const STAGGER_MS = 60
const MAX_STAGGERED_CARDS = 12

function PhotoCard({ photo, index, isFavourite, onToggleFavourite }) {
  const [imageReady, setImageReady] = useState(false)
  const delay = Math.min(index, MAX_STAGGERED_CARDS - 1) * STAGGER_MS

  return (
    <article
      style={{ animationDelay: `${delay}ms` }}
      className="group animate-rise overflow-hidden rounded-2xl border border-line bg-card transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10"
    >
      <div className="aspect-[3/2] overflow-hidden bg-line">
        <img
          src={`https://picsum.photos/id/${photo.id}/600/400`}
          alt={`Photo by ${photo.author}`}
          width="600"
          height="400"
          loading="lazy"
          onLoad={() => setImageReady(true)}
          onError={() => setImageReady(true)}
          className={`h-full w-full object-cover transition duration-700 ease-out ${
            imageReady ? 'opacity-100 group-hover:scale-105' : 'scale-105 opacity-0'
          }`}
        />
      </div>
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <p className="truncate text-sm font-medium">{photo.author}</p>
        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-pressed={isFavourite}
          aria-label={`Favourite photo by ${photo.author}`}
          className={`relative flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition duration-200 hover:bg-heart/10 hover:text-heart focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heart active:scale-90 ${
            isFavourite ? 'text-heart' : 'text-muted'
          }`}
        >
          {isFavourite && (
            <span className="pointer-events-none absolute inset-0 animate-heart-burst rounded-full bg-heart/40" />
          )}
          <svg
            viewBox="0 0 24 24"
            fill={isFavourite ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            aria-hidden="true"
            className={`relative size-5 ${isFavourite ? 'animate-heart-pop' : ''}`}
          >
            <path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 6.7a4.5 4.5 0 0 1 8 2.8c0 6.1-8 11-8 11z" />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default memo(PhotoCard)
