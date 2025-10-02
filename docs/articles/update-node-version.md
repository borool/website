---
sidebar_position: 2
---

# Update Node.js version on Windows

To change the Node version on Windows, use nvm. For more information on nvm installation, read [How to install NVM on Windows](./install-nvm.md).

To update your Node.js version:

1. Run CMD, Powershell, or other preferred command line tool as administrator.

2. Run the following command:

    ```
    nvm install node
    ```

3. After the installation is complete, switch to the appropriate Node.js version with the `nvm use` command. For example, for version `24.9.0`:

    ```
    nvm use 24.9.0
    ```

As a result, Node.js is updated. To check the Node version, run:

```
node -v
```

Or:

```
node --version
```
