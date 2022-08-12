# ZK Game Primitives

This project is a monorepo of packages that contain primitives for making ZK Games. Originally based on the packages that Dark Forest publishes for 3rd-party consumption but adjusted to make things generic and consumable in any ZK Game.

## Usage

These are the reference implementations for the published packages, but you may want to fork and edit them for own use. When forking, you'll likely need to generate JavaScript from the TypeScript code before it can be consumed by other code. A `build` script is generally available to build each package correctly, and you can run it with `npm run build` inside the package directory you are modifying.

## License

We try to keep all these packages MIT licensed unless a specific license is required by a dependency choice. Each package contains its own LICENSE file and a SPDX `"license"` identifier in the `package.json` file.
