import nconf from 'nconf';
import requestify from 'requestify';

export default class SlackMessage {
    constructor(text, attachments = []) {
        this.text = text;
        this.attachments = attachments;

        this.channel = nconf.get("app:slack:channel");
        this.webhook = nconf.get("app:slack:webhook");
        this.username = nconf.get("app:slack:username");
        this.iconEmoji = nconf.get("app:slack:iconEmoji");
    }

    get Message() {
        return {
            text: this.text,
            channel: this.channel,
            username: this.username,
            icon_emoji: this.iconEmoji,
            attachments: this.attachments.map(attachment => attachment.Attachment).filter(attachment => !!attachment)
        }
    }

    sendMessage() {
        return requestify.request(this.webhook, {
            method: 'POST',
            body: this.Message
        })
    }
}