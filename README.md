# shopify-taxonomy

`shopify-taxonomy` is a collection of simple clients to get the Shopify product taxonomy name and full name (Grandparent category > Parent category > Child category), given the ID.

## Install

```bash
yarn add shopify-taxonomy-es # spanish version
```

## Usage

```typescript
import taxonomy from "shopify-taxonomy-es";

taxonomy.getCategory("ap-2"); // Get category for animal products in spanish
```

## Development

### Update taxonomy definitions

1. Get taxonomy definition files from [Shopify's official product taxonomy repo](https://github.com/Shopify/product-taxonomy/tree/main/dist) and paste them into [./data folder](./data).

2. Run script to take the most important details for each category (`id`, `name` and `parent_id`) inside each verticals:

```bash
yarn process:taxonomy
```
