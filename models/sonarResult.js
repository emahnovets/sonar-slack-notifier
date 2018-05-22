import SlackMessage from './slackMessage';
import SlackMessageAttachment from './slackMessageAttachment';

export default class SonarResult {
  constructor(sonarResultRaw) {
    this.qualityGate = sonarResultRaw.qualityGate;
    this.project = sonarResultRaw.project;
    this.analysedAt = sonarResultRaw.analysedAt;
  }

  get MessageTitle() {
    const analysedAt = new Date(this.analysedAt);

    return `Project *${this.project.name}* was analyzed at ${analysedAt.toUTCString()}. Quality Gate status: ${this.qualityGate.status}`;
  }

  get Attachments() {
    const countersConditions = this.CountersConditions;
    const newConditions = this.NewConditions;

    return [
      (new SlackMessageAttachment(countersConditions, 'Current Project Counters')),
      ...newConditions.map(condition => (new SlackMessageAttachment(condition))),
    ];
  }

  get CountersConditions() {
    return this.qualityGate.conditions.filter(condition => !condition.metric.match(/^new_.+/));
  }

  get NewConditions() {
    return this.qualityGate.conditions.filter(condition => condition.metric.match(/^new_.+/));
  }

  get SlackMessage() {
    return new SlackMessage(this.MessageTitle, this.Attachments);
  }
}
