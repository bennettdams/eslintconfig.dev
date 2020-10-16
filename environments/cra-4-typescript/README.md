# Environment for Create React App v4.x with TypeScript

This environment can be used to test out configurations for CRA v4.x with TypeScript in isolation by developing inside a Docker container.

The setup results in encapsulated environment with a fresh CRA installation. It uses Node 14 and brings some pre-installed VS Code extensions with itunder the hood (see `.devcontainer`).

## Initial setup

1. Open the `cra-4-typescript` folder directly with VS Code (don't open the parent folder of the repo)

    `code ~/eslintconfig.dev/environments/cra-4-typescript`

2. Open VS Code's command palette (default `CTRL + Shift + P`)

3. Select "Remote-Containers: Rebuild and Reopen in Container" and let it run

4. Open bash via VS Code and install CRA v4.x with TypeScript

    `npx create-react-app@next --scripts-version=@next --template=typescript@next temp --use-npm && rm -rf ./temp/README.md && mv ./temp/* . && rm -rf temp`

    (CRA needs an empty directory for initialization, hence the `temp` shenanigans...)

5. Follow our installation steps from `eslintconfig.dev` for this environment

6. (optional) Reload window (VS Code command palette => "Reload Window") to re-initialize the setup

7. Allow ESLint for this workspace. Open any `*.tsx` file and look at the bottom/status bar of VS Code, "ESLint" should be in red text. Click on it an select **Allow** (not "Allow anywhere") to enable ESLint for this folder.

8. (optional) Reload window (VS Code command palette => "Reload Window") to re-initialize the setup

9. You're done! Edit files (e.g. `App.tsx`) and check whether
    - the ESLint rules (e.g. `react-hooks/exhaustive-deps`)
    - the Prettier rules (e.g. `tabWidth` of the `.prettierrc`) are applied

If you think that something messed up you can easily delete everything in the folder, reset the environment setup via Git and rebuild the container.
