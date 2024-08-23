# shopify-taxonomy-nl

`shopify-taxonomy-nl` is a small client to get Shopify product categories aka taxonomy details in locale `nl`. Matched by ID, the data included is `name`, `full name` (Grandparent category > Parent category > Child category) as well as parent ID, when defined.

## Install

```bash
yarn add shopify-taxonomy-nl
```

## Usage

```typescript
import taxonomy from "shopify-taxonomy-nl";

taxonomy.getCategory("ap-2"); // Returns taxonomy for animal products
taxonomy.getCategory("h"); // Throws error when ID is invalid/malformed
taxonomy.getCategory("hb-200"); // Returns null when category/taxonomy does not exist
```
