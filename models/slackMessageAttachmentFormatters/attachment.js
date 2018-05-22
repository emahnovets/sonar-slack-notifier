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
      title: this.getMetricTranslation(condition.metric),
      text: condition.value,
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

  getMetricTranslation(metric) {
    return metric.split('_').map(word => this.capitalize(word)).join(' ');
  }

  capitalize(word) {
    const [firstLetter, ...letters] = word;

    return [firstLetter.toUpperCase(), ...letters].join('');
  }
}
