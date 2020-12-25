# Messaging system - Kafka & NodeJS

## Main idea

We create messaging system where we logging data for visitors of our touristic agency website. So on website we logging which landmarks, events, tourist destinations visitors view.

## Technology used

- Kafka
- NodeJS
- Docker compose

## Installation and running

Make sure you have already installed both `Docker Engine` and `Docker Compose`.

Then we need to run next command for start Kafka and Zookeeper.
```
docker-compose up
```

Next we need to install npm packages and run producer, which sending data to Kafka system. So we can have multiple producers.

```
npm install
npm run producer
```

So then we can run listeners which subscribe to Kafka messaging queue and consume received data. We can run multiple consumers.
```
npm run consumer
```
