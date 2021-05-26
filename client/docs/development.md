# Development

All applications for Eprimo use this single monorepository and can be setup with [Docker](docker.md).

## Instructions

1. Add local DNS rules
   Linux/Mac

```zsh
sudo vim /etc/hosts

127.0.0.1 eprimo.test api.eprimo.test preview.eprimo.test cms.eprimo.test storybook.eprimo.test varnish.eprimo.test
```

Windows/WSL

```zsh
C:\WINDOWS\system32\drivers\etc\hosts

127.0.0.1 eprimo.test api.eprimo.test preview.eprimo.test cms.eprimo.test storybook.eprimo.test varnish.eprimo.test
```

1. create a <root>/.env.local from <root>/.env and enable flags as needed

1. add application credentials from keypass-container

Use a tool to access the keypass container under /secrets/\*.
f.e. https://www.macports.org/ or https://keepass.info/

Replace all variables marked in the .env files:

```
apps/api/.env -> apps/api/.env.local
apps/ez/.env -> apps/ez/.env.local
```

1. start all docker services

```zsh
make build
make up
make init
```

if there is an error like "there is already a container with that name":

```
docker system prune
```

1. Install the local certificates (see `# Local TLS` section below).

MacOs:

```
make install-cert-macos
```

Linux:

```
make install-cert-linux
```

Windows:
https://support.kaspersky.com/CyberTrace/1.0/en-US/174127.htm

1. Open the individual apps in your preferred browser via f.e.: `https://eprimo.test`.

Windows:

https://support.kaspersky.com/CyberTrace/1.0/en-US/174127.htm

For more information about creating new certificates check "infrastructure/environments/local/certs/readme.md"

Linux:

`make install-cert-linux`

For more information check https://thomas-leister.de/ca-zertifikat-importieren-linux-windows/

## For MacOS

For MacOs an NFS shared volume can be used to increase the application performance:

1.

```zsh
make nfs
```

1. In your local `<root>/.env.local` set `NFS=TRUE`

In case you have issues with NFS mounting, this could be due to MacOS permissions:

- Option 1: Open `System Preferences` > `Security & Privacy → Privacy → Full Disk Access`. Press `⌘ command + shift + G` and add `/sbin/nfsd`
- Option 2: The alternative is to have your project under `~/Projects` (TCC policies in macOS)

### Additional steps for Linux/WSL2

Configure your global Git settings to avoid owner file changes to be recognized.

```zsh
git config core.fileMode false
```

Prepare the permissions of the files in the `apps` folder.

```zsh
sudo chmod 777 -R apps/ez/public/var apps/ez/var
```

## Credentials!

### API

1. Download [KeePass](https://keepass.info/) (Windows) or [MacPass](https://github.com/MacPass/MacPass) (MacOS).
2. Open the `secrets/vault.kdbx` file in the project (Password ask to `Daniel.Schaefer@arithnea.de`, `markus.mahner.extern@arithnea.de` or `nicky.vandevoorde@arithnea.de`).
3. Credentials currently are categorized based on service.
4. Double click the Password cell, and it will be copied to your clipboard.
   ![Credentials Step 1](images/credentials-step-1.png)
5. Furthermore some of our Apps utilize `*.env` files.
   The `.env.local` ( must be placed in the respective folder `./apps/api/.env.local` in this case )is used for local environment overrides (not committed to the repository due to the `.gitignore` entry).
   This can contain credentials to authenticate to, for example Amazon Cognito, Google Tag Manager, and can be extended.
   ![Credentials Step 2](images/credentials-step-2.png)
6. The `*.env` files already contain their appropriate placeholders and can be overridden in case necessary.
7. variables will be set depending on the order of when each `*.env` file is loaded. The following logic applies: a variable set in `.env.$env.local` is more important than `.env.$env` and is more important than `.env`.

### eZ

Create `apps/ez/auth.json` with the content from the secret container. This will allow you to clone eZ Enterprise packages.
In case this is not set you will have a `Failed to execute git clone --mirror 'git@github.com:ezsystems/....git/'` error!

### Contribution

For additional or changes to existing credentials, create a new Pull Request to the `develop` branch.

## Local TLS

This project has enabled TLS for local development by default. To avoid browser messages that explain unsafe page requests,
follow this guide depending on your OS:
![Certificate Step 1](images/setup-cert-install-step-1.png)

### MacOS:

#### Automatic

`make install-cert-macos`

#### Manual

1. Open the folder `infrastructure/environments/local/certs` and double click the `eprimo-local.cert.pem`

![Certificate Step 2](images/setup-cert-install-step-2.png)

2. Open up `Keychain Access` and set the certificate as `Always Trust`.

![Certificate Step 3](images/setup-cert-install-step-3.png)

3. Open `<APP>.eprimo.test`

![Certificate Step 4](images/setup-cert-install-step-4.png)
