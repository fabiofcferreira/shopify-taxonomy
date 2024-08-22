import { TaxonomyLanguage } from "shopify-taxonomy-core";
import client from "..";

describe("English taxonomy client", () => {
  it("language should be set to English", () => {
    expect(client.getLanguage()).toBe(TaxonomyLanguage.English);
  });

  it("should return English taxonomy categories", () => {
    expect(client.getCategory("ap-2-1-1")).toMatchSnapshot();
    expect(client.getCategory("hb-1-2")).toMatchSnapshot();
  });

  it("should return null for not found categories ", () => {
    expect(client.getCategory("ap-12313123")).toBe(null);
    expect(client.getCategory("hb-100")).toBe(null);
    expect(client.getCategory("ww")).toBe(null);
  });

  it("should throw if category is invalid", () => {
    expect(() => client.getCategory("hb---11")).toThrowErrorMatchingSnapshot();
    expect(() => client.getCategory("h")).toThrowErrorMatchingSnapshot();
    expect(() => client.getCategory("a4")).toThrowErrorMatchingSnapshot();
  });
});
