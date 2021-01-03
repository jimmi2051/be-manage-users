## Quickstart

## Requirement for local

1. **node version** >= 10.16.3
1. **npm version** >= 6.9.0
1. **mongodb version** >= 3.6.3 (running)

## Requirement for docker

1. **Docker** >= 19.03.12
1. **Docker Compose** >= 1.26.2

### Setup environment for running local + docker

- _Rename .env-sample to .env_

- _Update environment variable in file .env_

- _Install TypeScript: npm install -g typescript_ (Only require for running local)

- _Install Concurrently: npm install -g concurrently_ (Only require for running local)

### Start for local

1. Install package: **_npm install_**

1. Start: **_npm run start_**

### Start with docker

1. Start: **_docker-compose up --build -d_**

### Run test with local

1. Test with dev: **_npm run test-dev_**
1. Test normal: **_npm run test_**

### Endpoint healthCheck

1. Access to: http://localhost:5000/api/v0/healthCheck
1. Get document API: http://localhost:5000/documentations

### Update Swagger

1. Update: **_npm run swagger-autogen_**
