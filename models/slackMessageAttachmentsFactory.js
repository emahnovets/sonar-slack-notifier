import attachmentFormatters from './attachments';

export default class SlackMessageAttachmentsFactory {
  constructor(conditions) {
    this.conditions = conditions;
  }

  get Attachments() {
    let unprocessedConditions = this.conditions;

    return attachmentFormatters.reduce((attachments, Formatter) => {
      const {
        conditionsForFormatter,
        otherConditions,
      } = this.splitConditionsByFormatter(Formatter, unprocessedConditions);
      unprocessedConditions = otherConditions;

      const formattedAttachments = this.getFormattedAttachments(Formatter, conditionsForFormatter);

      return [...attachments, ...formattedAttachments];
    }, []);
  }

  getFormattedAttachments(Formatter, conditions) {
    if (!conditions || conditions.length < 1) {
      return [];
    }

    return Formatter.SingleCondition ?
      conditions.map(condition => new Formatter([condition])) : [new Formatter(conditions)];
  }

  splitConditionsByFormatter(Formatter, conditions) {
    return conditions.reduce((splitedConditions, condition) => {
      if (Formatter.shouldUseCondition(condition)) {
        return {
          conditionsForFormatter: [...splitedConditions.conditionsForFormatter, condition],
          otherConditions: splitedConditions.otherConditions,
        };
      }

      return {
        conditionsForFormatter: splitedConditions.conditionsForFormatter,
        otherConditions: [...splitedConditions.otherConditions, condition],
      };
    }, {
      conditionsForFormatter: [],
      otherConditions: [],
    });
  }
}
