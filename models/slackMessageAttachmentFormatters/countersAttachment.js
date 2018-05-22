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
      color: '#439FE0',
      fields: this.conditions.map(condition => ({
        title: this.getMetricTranslation(condition.metric),
        value: condition.value,
        short: true,
      })),
    };
  }
}
