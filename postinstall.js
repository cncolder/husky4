async function main() {
  const ciInfo = require("ci-info");
  if (ciInfo.isCI) return;

  try {
    const childProcess = require("child_process");
    const { promisify } = require("util");
    const exec = promisify(childProcess.exec);
    await exec("git config --unset core.hooksPath");
  } catch {}

  try {
    const fs = require("fs");
    const path = require("path");
    const pkgDir = require("pkg-dir");
    const rootDir = await pkgDir(__dirname);
    const huskyDir = path.join(rootDir, ".husky");
    await fs.promises.rmdir(huskyDir, { recursive: true });
  } catch {}
}

main();
