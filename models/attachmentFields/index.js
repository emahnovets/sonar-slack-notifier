import Field from './field';
import SqaleIndexField from './sqaleIndexField';
import PercentageField from './percentageField';

export default {
  sqale_index: SqaleIndexField,
  line_coverage: PercentageField,
  branch_coverage: PercentageField,
  default: Field,
};
