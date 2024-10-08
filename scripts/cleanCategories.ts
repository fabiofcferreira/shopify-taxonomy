import path from "path";
import { readdirSync, readFileSync, writeFileSync } from "fs";

const PRE_PROCESSED_TAXONOMY_FILES_DIR = path.join("./data");

function getKnownFilenames() {
  try {
    const dataFolder = readdirSync(PRE_PROCESSED_TAXONOMY_FILES_DIR);

    return dataFolder.filter((filename) => {
      const supportedTaxonomyLanguages = [
        "da",
        "de",
        "en",
        "es",
        "fi",
        "fr",
        "it",
        "ja",
        "ko",
        "nl",
        "pl",
        "pt-BR",
        "pt-PT",
        "zh-CN",
      ];

      const baseFilename = filename.replace(".json", "");

      return supportedTaxonomyLanguages.includes(baseFilename);
    });
  } catch (ex) {
    if (ex instanceof Error) {
      throw ex;
    }

    throw new Error("Could not get ");
  }
}

function handler() {
  console.info(
    "👋 Fetching files and stripping unnecessary information from taxonomy categories files.",
  );

  try {
    const knownFileNames = getKnownFilenames();

    for (const filename of knownFileNames) {
      const fileBuffer = readFileSync(
        path.join(PRE_PROCESSED_TAXONOMY_FILES_DIR, filename),
      );

      const languageCode = filename.replace(".json", "");

      const taxonomyTree = JSON.parse(Buffer.from(fileBuffer).toString());

      for (const verticalIndex in taxonomyTree.verticals) {
        const vertical = taxonomyTree.verticals[verticalIndex];

        for (const categoryIndex in vertical.categories) {
          const category = vertical.categories[categoryIndex];

          category.id = category.id.replace(
            "gid://shopify/TaxonomyCategory/",
            "",
          );

          if (category.parent_id !== null) {
            category.parent_id = category.parent_id.replace(
              "gid://shopify/TaxonomyCategory/",
              "",
            );
          }

          delete category.full_name;
          delete category.level;
          delete category.attributes;
          delete category.children;
          delete category.ancestors;
        }
      }

      writeFileSync(
        path.join("./packages", languageCode, "src", filename),
        JSON.stringify(taxonomyTree),
      );
    }
  } catch (ex) {
    console.error(
      `🚒 Failed to clean taxonomy categories files. Error: ${ex instanceof Error ? ex.message : ex}`,
    );
  }
}

handler();
