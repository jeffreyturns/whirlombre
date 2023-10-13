---
title: 'Introduction'
description: 'meta description of the page'
foo: 'bar'
---

# Getting Started

## Installation

::Code{ title="node" }
```sh
$ npm install whirlombre
```
::

::callout
✨ Well done! A browser window should automatically open for http://localhost:3000
::

## TailwindCSS configuration

To configure whirlombre and start using in your palette you just need to import a function from package, and pass required arguments: 

::Code{ title="tailwind.config.js" }
```ts
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
::

## Usage in HTML

You will now have access to colors from your palette, like:
::Code{ title="index.vue" }
```html
<template>
  <p class="text-primary-500 bg-surface-200">Hello, World!</p>
</template>
```
::

::callout
Before getting started, please **make sure to have installed the recommended setup**:
* Follow the [Nuxt 3 Prerequisites](https://nuxt.com/docs/getting-started/installation#prerequisites)
* Download the [VS Code **MDC Extension**](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc)
::

| Key | Type      | Description |
| --- | --------- | ----------- |
| 1   | Wonderful | Table       |
| 2   | Wonderful | Data        |
| 3   | Wonderful | Website     |