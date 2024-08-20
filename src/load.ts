import { readFileSync } from "fs";
import path from "path";
import { TaxonomyLanguage, TaxonomyTreeValidator } from "./types";

const DEFINITIONS_PATH = path.join(__dirname, "definitions");

export function loadTaxonomyTree(taxonomyLanguage: TaxonomyLanguage) {
  try {
    const taxonomyFilename = `${taxonomyLanguage}.json`;

    const fileBuffer = readFileSync(
      path.join(DEFINITIONS_PATH, taxonomyFilename),
    );
    const fileContents = JSON.parse(Buffer.from(fileBuffer).toString());

    return TaxonomyTreeValidator.parse(fileContents);
  } catch (ex) {
    throw new Error(
      `Could not load taxonomy tree file: ${ex instanceof Error ? ex.message : ex}`,
    );
  }
}
