import path from "path";
import TaxonomyClient, { TaxonomyLanguage } from "shopify-taxonomy-core";

export default new TaxonomyClient({
  language: TaxonomyLanguage.Finnish,
  definitionsFolderPath: path.join(__dirname),
});
