# Yalo Chat - Partner - Example

This application exemplifies the integration with yalo's webhook channel

## How it works?

Three endpoints were implemented
- webhook
- start conversation
- end conversation

### Webhook
Validates if the received message is valid and checks if the message is released for transfer.

### Start conversation
Adds a flag that tells whether user messages received at the webhook endpoint can be transferred or not.

### End Conversation
Removes the flag, preventing user messages from being transferred.


# How to use?
The use of this application is done via docker. Follow the instructions below.

## Requirements
- Docker _**\***_
- Docker Compose _**\***_
- Make

## Commands
Copy the **.env.example** file to **.env** and replace the values as per your needs.

- Use `make up` for start aplication or `docker-compose up -d`
- Use `make stop` for stope aplication or `docker-compose stop`

The application will start on port **3001**, if you allow the port on the firewall