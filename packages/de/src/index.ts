import path from "path";
import TaxonomyClient, { TaxonomyLanguage } from "shopify-taxonomy-core";

export default new TaxonomyClient({
  language: TaxonomyLanguage.German,
  definitionsFolderPath: path.join(__dirname),
});
