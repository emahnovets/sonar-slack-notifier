import SlackMessage from './slackMessage';
import SlackMessageAttachmentsFactory from './slackMessageAttachmentsFactory';

export default class SonarResult {
  constructor(sonarResultRaw) {
    this.qualityGate = sonarResultRaw.qualityGate;
    this.project = sonarResultRaw.project;
    this.analysedAt = sonarResultRaw.analysedAt;
  }

  get MessageTitle() {
    const analysedAt = new Date(this.analysedAt);

    return `Project *${this.project.name}* was analyzed at ${analysedAt.toUTCString()}.
    Quality Gate status: ${this.qualityGate.status}`;
  }

  get Attachments() {
    const attachmentsFactory = new SlackMessageAttachmentsFactory(this.qualityGate.conditions);

    return attachmentsFactory.Attachments;
  }

  get SlackMessage() {
    return new SlackMessage(this.MessageTitle, this.Attachments);
  }
}
