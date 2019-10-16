# cruzhacks-2020-backend-authorization-npm

[work in progess] This will eventually be a Github package registry once the beta version has been released. 

This module is a set of functions for our backend services to securely communicate with each other.

## Requirements

### Environment Variables

The information below needs to be added as environment variables for both server and client.

#### Server
```
AUTH0_DOMAIN=YOUR_DOMAIN
RESOURCE_SERVER=YOUR_SERVER_IDENTIFIER
```

#### Client
```
RESOURCE_SERVER=YOUR_SERVER_IDENTIFIER
AUTH0_DOMAIN=YOUR_DOMAIN
AUTH0_CLIENT_ID=YOUR_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_CLIENT_SECRET
```

## Installation

### Note: Installation process will slightly change after it is a Github package registry.

1. `git clone` this repository
2. Install this local module by calling `npm install --save [path where you cloned this module]`

The dependency should now appear in your `package.json` file of your project.

## Usage
```
const myPackage = require("backend-authentication-npm")
myPackage.helloWorld()
```