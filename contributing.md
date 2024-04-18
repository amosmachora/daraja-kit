# Contributing to React Daraja

Welcome to React Daraja! We're excited that you're interested in contributing. Before you start, please follow the guidelines below.

## How to Contribute

We use [changesets](https://github.com/atlassian/changesets) to manage releases and versioning. Follow the three-step process below to contribute:

### Step 1: Make Changes

Make your code changes or additions in your local repository.

### Step 2: Versioning and Publishing.

If you feel your changes are supposed to be pushed to NPM , before committing your changes, run the following command:

```bash
npm install changeset

npx changeset
```

This command will prompt you to select the type of change you are making (patch, minor, major), and it will create a changeset file.

Although its not mandatory, you only run the command if you feel your changes are ready to be pushed to NPM or if its a critical bug that the users of the lib need in their code ASAP.

### Step 3: Fill out the Changeset

Navigate to the .changeset directory and open the generated changeset file. Fill out the details of your changes, including a description of the modifications you made.

### Step 4: Commit and Push

Commit your changes and the generated changeset file. Push your changes to your fork or branch. When your pull request is merged, the changeset will be used to create a release.

## : If you are too lazy

If you feel like those are too many steps just create a normal PR and the maintainers will handle the changeset versioning.

## Releasing Changes

Changesets help manage versioning and releases. Whenever you commit the generated changesets file, Github Actions automatically pushes the new package version to NPM. If you do not commit a changeset file the maintainers will release the changes to NPM whenever it is necessary.

## docs

To contribute to the documentation check out the [repo](https://github.com/amosmachora/daraja-kit-docs)

Thank you for contributing to Daraja Kit! 🚀
