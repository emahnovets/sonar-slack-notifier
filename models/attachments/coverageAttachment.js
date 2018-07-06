import Attachment from './attachment';
import AttachmentFiledFactory from '../attachmentFieldFactory';

const coverageConditionId = 'coverage';
const linesCoverageConditionId = 'line_coverage';
const conditionCoverageConditionId = 'branch_coverage';

export default class CoverageAttachment extends Attachment {
  static get SingleCondition() {
    return false;
  }

  static shouldUseCondition({ metric }) {
    return [
      coverageConditionId,
      linesCoverageConditionId,
      conditionCoverageConditionId
    ].includes(metric);
  }

  get Attachment() {
    const fieldFactory = new AttachmentFiledFactory();
    const {
      coverageCondition, linesCoverageCondition, conditionCoverageCondition
    } = this.Conditions;

    return {
      title: 'Current Coverage:',
      text: `${coverageCondition.value}%`,
      color: '#439FE0',
      fields: [
        linesCoverageCondition,
        conditionCoverageCondition
      ].map(condition => fieldFactory.getField(condition).Field),
    };
  }

  get Conditions() {
    return {
      coverageCondition: this.conditions.find(( { metric }) => metric === coverageConditionId),
      linesCoverageCondition: this.conditions.find(( { metric }) => metric === linesCoverageConditionId),
      conditionCoverageCondition: this.conditions.find(( { metric }) => metric === conditionCoverageConditionId),
    }
  }
}
