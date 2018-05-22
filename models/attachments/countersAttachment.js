import Attachment from './attachment';
import AttachmentFiledFactory from '../attachmentFieldFactory';

export default class CountersAttachment extends Attachment {
  static get SingleCondition() {
    return false;
  }

  static shouldUseCondition({ metric }) {
    return !metric.match(/^new_.+/);
  }

  get Attachment() {
    const fieldFactory = new AttachmentFiledFactory();

    return {
      title: 'Current Project Metrics:',
      color: '#439FE0',
      fields: this.conditions.map(condition => fieldFactory.getField(condition).Field),
    };
  }
}
