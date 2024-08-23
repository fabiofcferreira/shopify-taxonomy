import { readFileSync } from "fs";
import path from "path";

export function getBaseReadmeContents(baseDirPath = "./") {
  const baseReadme = readFileSync(path.join(baseDirPath, "README.base.md"));

  return baseReadme.toString();
}

export function prepareReadme(
  baseReadme: string,
  packageName: string,
  localeCode: string,
) {
  return baseReadme
    .replace(/\$PACKAGE_NAME/g, packageName)
    .replace(/\$LOCALE_CODE/g, localeCode);
}
