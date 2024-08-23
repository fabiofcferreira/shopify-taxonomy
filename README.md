# shopify-taxonomy

`shopify-taxonomy` is a collection of simple clients to get the Shopify product taxonomy name and full name (Grandparent category > Parent category > Child category), given the ID.

## Install

```bash
yarn add shopify-taxonomy-es # spanish version
```

### Available locales

| Language | NPM package                                                            |
| -------- | ---------------------------------------------------------------------- |
| da       | [shopify-taxonomy-da](https://npmjs.com/package/shopify-taxonomy-da)   |
| de       | [shopify-taxonomy-de](https://npmjs.com/package/shopify-taxonomy-de)   |
| en       | [shopify-taxonomy-en](https://npmjs.com/package/shopify-taxonomy-en)   |
| es       | [shopify-taxonomy-es](https://npmjs.com/package/shopify-taxonomy-es)   |
| fi       | [shopify-taxonomy-fi](https://npmjs.com/package/shopify-taxonomy-fi)   |
| fr       | [shopify-taxonomy-fr](https://npmjs.com/package/shopify-taxonomy-fr)   |
| it       | [shopify-taxonomy-it](https://npmjs.com/package/shopify-taxonomy-it)   |
| ja       | [shopify-taxonomy-ja](https://npmjs.com/package/shopify-taxonomy-ja)   |
| ko       | [shopify-taxonomy-ko](https://npmjs.com/package/shopify-taxonomy-ko)   |
| nl       | [shopify-taxonomy-nl](https://npmjs.com/package/shopify-taxonomy-nl)   |
| pl       | [shopify-taxonomy-pl](https://npmjs.com/package/shopify-taxonomy-pl)   |
| pt       | [shopify-taxonomy-pt](https://npmjs.com/package/shopify-taxonomy-pt)   |
| pt-BR    | [shopify-taxonomy-pt](https://npmjs.com/package/shopify-taxonomy-ptbr) |
| zh-CN    | [shopify-taxonomy-pt](https://npmjs.com/package/shopify-taxonomy-cn)   |

## Usage example

```typescript
import taxonomy from "shopify-taxonomy-es"; // Spanish client

taxonomy.getCategory("ap-2"); // Returns taxonomy for animal products
taxonomy.getCategory("h"); // Throws error when ID is invalid/malformed
taxonomy.getCategory("hb-200"); // Returns null when category/taxonomy does not exist
```

## Development

### Update taxonomy definitions

1. Get taxonomy definition files from [Shopify's official product taxonomy repo](https://github.com/Shopify/product-taxonomy/tree/main/dist) and paste them into [./data folder](./data).

2. Run script to take the most important details for each category (`id`, `name` and `parent_id`) inside each verticals:

```bash
yarn scripts:minify:taxonomy
```

### Update readmes

```bash
yarn scripts:update:readmes
```

## Update version for all packages

```bash
yarn prepare:publish $tag # e.g. 1.0.5
```
