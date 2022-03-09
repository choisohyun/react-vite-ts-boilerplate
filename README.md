# My React Boilerplate

## Dependencies

- React
- Vite
- Typescript 
- eslint
- Prettier

## How to use

```
gh repo clone choisohyun/react-vite-ts-boilerplate
yarn install
yarn dev
yarn prod
```

- fast dev server

```bash
$ yarn dev
yarn run v1.22.17
$ vite
                                                                                                                                                                                           16:58:10
  vite v2.8.6 dev server running at:

  > Local: http://localhost:3000/                                                                                                                                                          16:58:10
  > Network: use --host to expose                                                                                                                                                          16:58:10
                                                                                                                                                                                           16:58:10
  ready in 776ms.
```

- fast build speed

```bash
$ yarn prod               
yarn run v1.22.17
$ vite build
vite v2.8.6 building for production...                                                                                                                                                     17:01:48
✓ 1 modules transformed.                                                                                                                                                                   17:01:48
transforming (17) node_modules/@babel/runtime/helpers/esm/extends.js
 WARN  Generated an empty chunk: "vendor"                                                                                                                                                  17:01:48


 WARN  Generated an empty chunk: "index"                                                                                                                                                   17:01:48

dist/public/index.html           0.47 KiB                                                                                                                                                  17:01:48
dist/assets/vendor.e3bb175a.js   0.00 KiB / gzip: 0.02 KiB                                                                                                                                 17:01:48
✨  Done in 1.61s.
```

