import { loadTaxonomyTree } from "./load";
import {
  CATEGORY_ID_REGEXP,
  TaxonomyCategory,
  TaxonomyLanguage,
  TaxonomyTree,
} from "./types";

export class ShopifyTaxonomyClient {
  private language: TaxonomyLanguage;
  private taxonomyTree: TaxonomyTree;

  constructor(language: TaxonomyLanguage) {
    this.language = language;
    this.taxonomyTree = loadTaxonomyTree(language);
  }

  public setLanguage(newLanguage: TaxonomyLanguage) {
    this.language = newLanguage;
    this.taxonomyTree = loadTaxonomyTree(TaxonomyLanguage.English);
  }

  public getLanguage(): TaxonomyLanguage {
    return this.language;
  }

  public getCategoryFullName(id: string): string {
    const pathParts = id.split("-");

    const verticalId = pathParts[0];
    const vertical = this.taxonomyTree.verticals.find(
      (vertical) => vertical.prefix === verticalId,
    );

    if (!vertical) {
      return "";
    }

    const names = pathParts.reduce((acc, _part, index) => {
      const subCategoryId = pathParts.slice(0, index + 1).join("-");
      const category = vertical.categories.find(
        (category) => category.id === subCategoryId,
      );

      if (!category) {
        return acc;
      }

      return acc.concat(category.name);
    }, [] as string[]);

    return names.join(" > ");
  }

  public getCategory(id: string): TaxonomyCategory | null {
    if (!CATEGORY_ID_REGEXP.test(id)) {
      throw new Error(`Category ID '${id}' is not valid.`);
    }

    const categoryIdPath = id.split("-");

    const verticalId = categoryIdPath[0];
    const vertical = this.taxonomyTree.verticals.find(
      (vertical) => vertical.prefix === verticalId,
    );

    if (!vertical) {
      return null;
    }

    const details = vertical.categories.find((category) => {
      return category.id === id;
    });

    if (!details) {
      return null;
    }

    return {
      ...details,
      fullName: this.getCategoryFullName(id),
    };
  }
}

export default new ShopifyTaxonomyClient(TaxonomyLanguage.English);
