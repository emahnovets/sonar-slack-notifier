export default class SlackMessageAttachment {
    constructor(conditions, title) {
        this.title = title;
        this.conditions = Array.isArray(conditions) ? conditions : [ conditions ];
    }

    get Attachment() {
        if (this.conditions.length === 1) {
            return this.SingeConditionAttachment;
        } else if (this.conditions.length > 1) {
            return this.MultiConditionsAttachment;
        }

        return null;
    }

    get SingeConditionAttachment() {
        const [ condition ] = this.conditions;

        return {
            title: condition.metric
        };
    }

    get MultiConditionsAttachment() {
        return {
            title: this.title,
            fields: this.conditions.map(condition => ({
                title: condition.metric,
                value: condition.value,
                short: true
            }))
        };
    }
}