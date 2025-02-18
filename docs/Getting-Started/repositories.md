---
sidebar_position: 4
---

# Connect Repositories

To depploy your app by pullrequest or push you need to connect a repository to Kubero.
Therefor you need to create a Personal Access Token (PAT) on your repository provider.

List of available repositories

- GitHub
- Gitlab (hosted and self-hosted)
- Bitbucket (hosted and self-hosted)
- Gitea (hosted and self-hosted)
- Gogs

## GitHub

Official documentation: [Managing your personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Link to your developer settings: [Link](https://github.com/settings/apps)

GitHub offers two types of PATs: *"fine-grained (beta)"* and *"Tokens (classic)"*. Kubero works with both types.


### Tokens (classic)
![Repository permissions Classic](./img/repositories_token_classic.png)

### Fine-grained (beta)
![Fine Grained Persmissions](./img/repositories_fine_graned_github_permissions.png)

## Gitea
1. Log into Gitea and click your avatar to open the user menu, then select Settings.

![Link to settings](./img/repositories_gitea_settings.png)

2. From the Settings menu, select Applications.

In the Generate New Token section:
1. Enter a name for the token
2. Select **All (public, private, and limited)** repository access
3. Select permissions
   - **admin Read and Write**
   - **repository Read and Write**
   - **user Read**
3. Then click the Generate Token button.

![Alt text](./img/repositories_gitea_tokens.png)
![Alt text](./img/repositories_gitea_permissions.png)