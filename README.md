# valentines

A tiny interactive flower page for Dia dos Namorados / Valentine's vibes.

## How to customize

1. Open `script.js`.
2. Edit the `notes` array.
3. Optional: add photos into the `assets` folder.
4. Connect a photo to a note like this:

```js
notes[3].image = "./assets/us.jpg";
notes[3].caption = "us. still us.";
```

## Suggested GitHub Pages setup

1. Create a new GitHub account.
2. Create a new public repository named `valentines`.
3. Upload these files into the repo root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/root`.
7. Save.

Your link should eventually look like:

```txt
https://NEWUSERNAME.github.io/valentines/
```

## Important privacy note

This is a public static website when hosted on GitHub Pages. Keep anything deeply private out of the files.
The `noindex` meta tag is included, but it is not real security.
