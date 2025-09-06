# Jekyll Photo Gallery

A simple photo gallery site built with Jekyll, ready for GitHub Pages.

## How to Use

- Add your photos to the `images/gallery/` folder.
- The gallery page (`index.md`) automatically displays all images in that folder after you rebuild or serve the site.
- Use the commission page (`commission.html`) to request a photoshoot or commission.

## Build & Preview

```powershell
bundle exec jekyll serve
```

Then open http://localhost:4000 in your browser.

## Deploy

1. Push to a GitHub repository named `<username>.github.io` for a user site, or publish from the `gh-pages` branch of any repo as a project site.
2. In GitHub Pages settings, select the correct branch.

## Future Features

- Add e-commerce integration (e.g., Snipcart or Shopify Buy Button) to sell photos.
- Customize layouts, tags, lightbox effects, and more.
