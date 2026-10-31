import useFetchPhotos from '../hooks/useFetchPhotos'
import ErrorMessage from './ErrorMessage'
import Spinner from './Spinner'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return <p className="animate-rise mt-8 text-muted">{photos.length} photos</p>
}

export default Gallery
