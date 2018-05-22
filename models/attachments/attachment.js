import getMetricTranslation from '../../translations/en';

export default class Attachment {
  static get SingleCondition() {
    return true;
  }

  static shouldUseCondition() {
    return true;
  }

  constructor(conditions) {
    this.conditions = conditions;
  }

  get Attachment() {
    const [condition] = this.conditions;

    return {
      title: getMetricTranslation(condition.metric),
      text: condition.value ? condition.value : '--',
      color: this.getColorByStatus(condition.status),
    };
  }

  getColorByStatus(status) {
    switch (status) {
      case 'OK':
        return 'good';
      case 'WARN':
        return 'warning';
      case 'ERROR':
        return 'danger';
      default:
        return '';
    }
  }
}
