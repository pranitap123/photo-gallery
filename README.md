# Photo Gallery

A photo gallery built with React, Vite and Tailwind CSS. It loads 30 photos from the [Picsum Photos API](https://picsum.photos/), lets you search by author and saves your favourites in localStorage.

## Run it locally

```bash
git clone https://github.com/pranitap123/photo-gallery.git
cd photo-gallery
npm install
npm run dev
```

Then open http://localhost:5173.

## Where things are

- `src/hooks/useFetchPhotos.js` fetches the photos and returns `photos`, `loading` and `error`
- `src/reducers/favouritesReducer.js` holds the favourites reducer and the localStorage helpers
- `src/components/Gallery.jsx` connects the search and favourites state to the grid
