# $PACKAGE_NAME

`$PACKAGE_NAME` is a small client to get Shopify product categories aka taxonomy details in locale `$LOCALE_CODE`. Matched by ID, the data included is `name`, `full name` (Grandparent category > Parent category > Child category) as well as parent ID, when defined.

## Install

```bash
yarn add $PACKAGE_NAME
```

## Usage

```typescript
import taxonomy from "$PACKAGE_NAME";

taxonomy.getCategory("ap-2"); // Returns taxonomy for animal products
taxonomy.getCategory("h"); // Throws error when ID is invalid/malformed
taxonomy.getCategory("hb-200"); // Returns null when category/taxonomy does not exist
```
