import Attachment from './attachment';
import getMetricTranslation from '../../translations/en';

export default class NewCoverageAttachment extends Attachment {
  static get SingleCondition() {
    return true;
  }

  static shouldUseCondition({ metric }) {
    return metric === 'new_coverage';
  }

  get Attachment() {
    const [condition] = this.conditions;

    return {
      title: getMetricTranslation(condition.metric),
      text: condition.value ? `${condition.value}%` : '--',
      color: this.getColorByStatus(condition.status),
    };
  }
}
