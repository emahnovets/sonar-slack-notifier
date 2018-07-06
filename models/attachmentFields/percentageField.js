import Field from './field';

import getMetricTranslation from '../../translations/en';

export default class PercentageField extends Field {
  get Field() {
    return {
      title: getMetricTranslation(this.condition.metric),
      value: this.getFormattedValue(this.condition.value),
      short: true,
    };
  }

  getFormattedValue(value) {
    return `${value}%`;
  }
}
