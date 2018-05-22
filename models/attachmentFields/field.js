import getMetricTranslation from '../../translations/en';

export default class Field {
  constructor(condition) {
    this.condition = condition;
  }

  get Field() {
    return {
      title: getMetricTranslation(this.condition.metric),
      value: this.condition.value,
      short: true,
    };
  }
}
