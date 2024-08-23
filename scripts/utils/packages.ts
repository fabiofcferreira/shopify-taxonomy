import { readFileSync } from "fs";
import packageJsonDefinition from "../../package.json";
import path from "path";

export function getPackagesList() {
  return packageJsonDefinition.workspaces.map((wsPath) => {
    const languageCode = wsPath.replace("./packages/", "");
    const packageDefinition = JSON.parse(
      readFileSync(path.join(wsPath, "package.json")).toString(),
    );

    return {
      languageCode,
      path: wsPath,
      name: packageDefinition.name,
    };
  });
}
