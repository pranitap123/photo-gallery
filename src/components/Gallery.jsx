import useFetchPhotos from '../hooks/useFetchPhotos'
import ErrorMessage from './ErrorMessage'
import PhotoGrid from './PhotoGrid'
import Spinner from './Spinner'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  if (loading) return <Spinner />
  if (error) return <ErrorMessage message={error} />

  return <PhotoGrid photos={photos} />
}

export default Gallery
