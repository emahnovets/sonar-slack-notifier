import Attachment from './attachment';

export default class CoverageAttachment extends Attachment {
  static get SingleCondition() {
    return false;
  }

  static shouldUseCondition({ metric }) {
    return [
      'coverage',
    ].includes(metric);
  }

  get Attachment() {
    const [condition] = this.conditions;

    return {
      title: 'Current Coverage:',
      text: `${condition.value}%`,
      color: '#439FE0',
    };
  }
}
