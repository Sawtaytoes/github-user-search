# GitHub User Search

Basic GitHub User Search using GitHub GraphQL API v4

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configuration

### Create Token
To create a personal access token for the GitHub API, go to https://github.com/settings/tokens.

Follow these steps to setup the correct permissions:
https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql

Per their documentation, you'll need these permissions:
```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

### Setup Env Vars
GitHub API Key:
`REACT_APP_GITHUB_TOKEN`

Store this value somewhere safe or in a `.githubToken` file in the project root so you don't forget it. Do note though, storing it on the filesystem leaves the token in plain text.
