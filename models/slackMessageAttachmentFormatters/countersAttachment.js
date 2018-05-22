import Attachment from './attachment';

export default class CountersAttachment extends Attachment {
  static get SingleCondition() {
    return false;
  }

  static shouldUseCondition({ metric }) {
    return !metric.match(/^new_.+/);
  }

  get Attachment() {
    return {
      title: 'Current Project Counters',
      color: '',
      fields: this.conditions.map(condition => ({
        title: condition.metric,
        value: condition.value,
        short: true,
      })),
    };
  }
}
