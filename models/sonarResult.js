import SlackMessage from './slackMessage';
import SlackMessageAttachmentsFactory from './slackMessageAttachmentsFactory';

export default class SonarResult {
  constructor(sonarResultRaw) {
    this.qualityGate = sonarResultRaw.qualityGate;
    this.project = sonarResultRaw.project;
  }

  get MessageTitle() {
    return `Project *${this.project.name}* was analyzed.\n` +
      `Quality Gate status: *${this.qualityGate.status}*`;
  }

  get Attachments() {
    const attachmentsFactory = new SlackMessageAttachmentsFactory(this.qualityGate.conditions);

    return attachmentsFactory.Attachments;
  }

  get SlackMessage() {
    return new SlackMessage(this.MessageTitle, this.Attachments);
  }
}
