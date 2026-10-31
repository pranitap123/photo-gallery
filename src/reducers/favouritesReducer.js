const STORAGE_KEY = 'favourite-photos'

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'

export function favouritesReducer(favourites, action) {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      return favourites.includes(action.id)
        ? favourites.filter((id) => id !== action.id)
        : [...favourites, action.id]
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export function loadFavourites() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

export function saveFavourites(favourites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  } catch (err) {
    console.error('Could not save favourites', err)
  }
}
