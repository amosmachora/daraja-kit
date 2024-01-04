# Contributing to React Daraja

Welcome to React Daraja! We're excited that you're interested in contributing. Before you start, please follow the guidelines below.

## How to Contribute

If you want to contribute to the library itself just make changes on other files other than the docs-app folder. If you want to contribute to the documentation app all the source code is in the docs-app folder (NextJS)

We use [changesets](https://github.com/atlassian/changesets) to manage releases and versioning. Follow the three-step process below to contribute:

### Step 1: Make Changes

Make your code changes or additions in your local repository. Before committing your changes, run the following command:

```bash
npx changeset

```

This command will prompt you to select the type of change you are making (patch, minor, major), and it will create a changeset file.

Although its not mandatory, you only run the command if you feel your changes are ready to be pushed to NPM or if its a critical bug that the users of the lib need in their code ASAP.

### Step 2: Fill out the Changeset

Navigate to the .changeset directory and open the generated changeset file. Fill out the details of your changes, including a description of the modifications you made.

### Step 3: Commit and Push

Commit your changes and the generated changeset file. Push your changes to your fork or branch. When your pull request is merged, the changeset will be used to create a release.

## Releasing Changes

Changesets help manage versioning and releases. Whenever you commit the generated changesets file, Github Actions automatically pushes the new package version to NPM.

Thank you for contributing to React Daraja! 🚀
