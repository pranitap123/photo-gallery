import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import {
  TOGGLE_FAVOURITE,
  favouritesReducer,
  loadFavourites,
  saveFavourites,
} from '../reducers/favouritesReducer'
import ErrorMessage from './ErrorMessage'
import PhotoGrid from './PhotoGrid'
import SearchBar from './SearchBar'
import Spinner from './Spinner'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const [query, setQuery] = useState('')
  const [favourites, dispatch] = useReducer(favouritesReducer, [], loadFavourites)

  useEffect(() => {
    saveFavourites(favourites)
  }, [favourites])

  const handleSearch = useCallback((event) => {
    setQuery(event.target.value)
  }, [])

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: TOGGLE_FAVOURITE, id })
  }, [])

  const filteredPhotos = useMemo(() => {
    const term = query.trim().toLowerCase()
    return photos.filter((photo) => photo.author.toLowerCase().includes(term))
  }, [photos, query])

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return (
    <>
      <SearchBar value={query} onChange={handleSearch} />
      {filteredPhotos.length > 0 ? (
        <PhotoGrid
          photos={filteredPhotos}
          favourites={favourites}
          onToggleFavourite={handleToggleFavourite}
        />
      ) : (
        <p role="status" className="py-24 text-center text-muted">
          No photos found for "{query.trim()}"
        </p>
      )}
    </>
  )
}

export default Gallery
