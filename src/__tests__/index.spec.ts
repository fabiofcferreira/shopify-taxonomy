import taxonomy, { ShopifyTaxonomyClient } from "..";
import { TaxonomyLanguage } from "../types";

describe("Taxonomy client", () => {
  it("should return category details", () => {
    expect(taxonomy.getCategory("ap")).toMatchObject(
      expect.objectContaining({
        fullName: "Animals & Pet Supplies",
        id: "ap",
        name: "Animals & Pet Supplies",
        parent_id: null,
      }),
    );

    expect(taxonomy.getCategory("ap-1")).toMatchObject(
      expect.objectContaining({
        fullName: "Animals & Pet Supplies > Live Animals",
        id: "ap-1",
        name: "Live Animals",
        parent_id: "ap",
      }),
    );

    expect(taxonomy.getCategory("ap-2-1")).toMatchObject(
      expect.objectContaining({
        fullName: "Animals & Pet Supplies > Pet Supplies > Bird Supplies",
        id: "ap-2-1",
        name: "Bird Supplies",
        parent_id: "ap-2",
      }),
    );
  });

  it("should return in different languages after changing null when category cannot be found", () => {
    const customClient = new ShopifyTaxonomyClient(TaxonomyLanguage.Portuguese);

    expect(taxonomy.getCategory("ap")).toMatchObject(
      expect.objectContaining({
        fullName: "Artigos para animais e animais estimação",
        id: "ap",
        name: "Artigos para animais e animais estimação",
        parent_id: null,
      }),
    );

    customClient.setLanguage(TaxonomyLanguage.Spanish);

    expect(taxonomy.getCategory("ap")).toMatchObject(
      expect.objectContaining({
        fullName: "Productos para mascotas y animales",
        id: "ap",
        name: "Productos para mascotas y animales",
        parent_id: null,
      }),
    );
  });

  it("should throw error if category id is not valid", () => {
    expect(() => taxonomy.getCategory("p")).toThrowErrorMatchingSnapshot();

    expect(() =>
      taxonomy.getCategory("completely*mal_formed-id"),
    ).toThrowErrorMatchingSnapshot();

    expect(() =>
      taxonomy.getCategory("?***efewfewf-wdfkjhgdjhgdhjg2h"),
    ).toThrowErrorMatchingSnapshot();
  });

  it("should return null when category cannot be found", () => {
    expect(taxonomy.getCategory("ap-100")).toBe(null);
    expect(taxonomy.getCategory("ww")).toBe(null);
    expect(taxonomy.getCategory("hb-3-2-5-1-234")).toBe(null);
  });
});
