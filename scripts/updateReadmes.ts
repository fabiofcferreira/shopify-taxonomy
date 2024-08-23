import { writeFileSync } from "fs";
import path from "path";
import { getPackagesList } from "./utils/packages";
import { getBaseReadmeContents, prepareReadme } from "./utils/readme";

function handler() {
  try {
    const packagesList = getPackagesList();
    const packagesLanguageCodes = packagesList.map((pkg) => pkg.languageCode);
    console.info(
      `🧐 Loaded packages list: ${packagesLanguageCodes.join(", ")}.`,
    );

    const baseReadme = getBaseReadmeContents();

    console.info("⏳ Updating READMEs for packages...");

    for (const pkg of packagesList) {
      const readme = prepareReadme(baseReadme, pkg.name, pkg.languageCode);

      writeFileSync(path.join(pkg.path, "README.md"), readme);
    }

    console.info(
      `✅ Updated all READMEs for packages: ${packagesLanguageCodes.join(", ")}!`,
    );
  } catch (ex) {
    console.error(
      `Failed to update READMEs for packages: ${ex instanceof Error ? ex.message : ex}`,
    );
  }
}

handler();
