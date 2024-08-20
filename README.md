# shopify-taxonomy-js

`shopify-taxonomy-js` is a simple client to get the Shopify product taxonomy name and full name (Grandparent category > Parent category > Child category), given the ID.

## Install

```bash
yarn add shopify-taxonomy-js
```

## Usage

### English

```typescript
import taxonomy from "shopify-taxonomy-js";

taxonomy.getCategory("ap-2"); // Get category for animal products
```

### Non-english languages

If you wish to use this in a different language other than English:

```typescript
import { ShopifyTaxonomyClient } from "shopify-taxonomy-js";

const portugueseTaxonomy = new ShopifyTaxonomyClient(
  TaxonomyLanguage.Portuguese
);
portugueseTaxonomy.getCategory("ap-2"); // Get category for animal products
```

## Development

### Update taxonomy definitions

1. Get taxonomy definition files from [Shopify's official product taxonomy repo](https://github.com/Shopify/product-taxonomy/tree/main/dist) and paste them into [./data folder](./data).

2. Run script to take the most important details for each category (`id`, `name` and `parent_id`) inside each verticals:

```bash
yarn process:taxonomy
```
