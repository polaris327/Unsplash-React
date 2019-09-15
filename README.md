# Zion - Frontend Test

## Technologies used
React, Redux, Styled component

## Unsplash API
constants/service-info.js for unsplash API
```
API_ROOT = 'https://api.unsplash.com';

ACCESS_KEY = 'somekey-xxx';

SECRET_KEY = 'somekey-xxx';
```

## HOW TO RUN

#### Install App
```
yarn or npm install
```

#### Start App
```
yarn start or npm run start
```

## Features

- A sidebar with search input that searches for Unsplash users by username
- User list area on the sidebar
- Photo Grid Area displaying photos from Unsplash api `/photos?`
- Displaying photos by a user `/users/:username/photos`
- Lazy loading photos.
- Footer for credits and social icons.
- Not Found component.
