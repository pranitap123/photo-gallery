import { memo } from 'react'

function SearchBar({ value, onChange }) {
  return (
    <div className="relative mt-8 max-w-md">
      <label htmlFor="author-search" className="sr-only">
        Search photos by author
      </label>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted"
      >
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
      <input
        id="author-search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search by author"
        autoComplete="off"
        className="w-full rounded-full border border-line bg-card py-3 pr-5 pl-12 placeholder:text-muted focus:border-heart focus:outline-none"
      />
    </div>
  )
}

export default memo(SearchBar)
