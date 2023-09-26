---
title: 'Introduction'
description: 'meta description of the page'
---

# Getting Started

## Installation

```sh
$ pnpm install whirlombre
```

## TailwindCSS configuration

To configure whirlombre and start using in your palette you just need to import a function from package, and pass required arguments: 

```ts
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      primary: generateShades(240, 0.37),
      surface: generateShades(12, 0.03),
    },
  },
  plugins: [],
}
```

## Usage in HTML

You will now have access to colors from your palette, like:

```html
<p class="text-primary-500 bg-surface-200">Hello, World!</p>
```
