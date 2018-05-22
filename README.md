# Sonar slack notifier

Simple server for parse and send sonar quality gate statuses to the slack channel.

## Example

![Message Example](https://i.imgur.com/GWmxe7I.png)

## Installation

```
git clone git@github.com:EvgenyMahnovets/sonar-slack-notifier.git
```
```
cd sonar-slack-notifier
```

Install all dependencies:

```
npm install
```

Create configuration file:

```
cp examples/config.json config.json
```

Modify webhook and slack channel in `config.json`

## Run server

```
npm start
```

## Sonar configuration

Add your server address as webhook in sonar project preferences (`Administration > General Settings > Webhooks`).

Fill URL wild with your sonar-slack-notifier server address:

```
https://awesomeproject.com:3000/sonarQube
```

Sonar project configuration example:
![Configuration Example](https://i.imgur.com/5QpY26O.png)