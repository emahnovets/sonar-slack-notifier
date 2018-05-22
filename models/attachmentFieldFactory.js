import attachmentFields from './attachmentFields';

export default class AttachmentFiledFactory {
  getField(condition) {
    const defaultField = 'default';

    if (attachmentFields[condition.metric]) {
      return new attachmentFields[condition.metric](condition);
    }

    return new attachmentFields[defaultField](condition);
  }
}
