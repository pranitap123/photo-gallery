import { useEffect, useState } from 'react'

const PHOTOS_URL = 'https://picsum.photos/v2/list?limit=30'

function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function loadPhotos() {
      try {
        const response = await fetch(PHOTOS_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        setPhotos(await response.json())
      } catch (err) {
        if (err.name === 'AbortError') return
        console.error(err)
        setError('We could not load the photos. Please check your connection and refresh.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadPhotos()

    return () => controller.abort()
  }, [])

  return { photos, loading, error }
}

export default useFetchPhotos
