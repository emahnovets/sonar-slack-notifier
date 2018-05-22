import Field from './field';

import getMetricTranslation from '../../translations/en';

export default class SqaleIndexField extends Field {
  get Field() {
    return {
      title: getMetricTranslation(this.condition.metric),
      value: this.getFormattedValue(this.condition.value),
      short: true,
    };
  }

  getFormattedValue(valueRaw) {
    const value = parseInt(valueRaw, 10);
    const days = Math.floor(value / 8 / 60);
    const hours = Math.floor((value - (days * 8 * 60)) / 60);
    const minutes = value - (days * 8 * 60) - (hours * 60);

    return `${days}d ${hours}h ${minutes}m`;
  }
}
