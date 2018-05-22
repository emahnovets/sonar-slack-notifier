const metricTranslations = {
  accessors: 'Accessors',
  blocker_violations: 'Blocker Issues',
  branch_coverage: 'Condition Coverage',
  bugs: 'Bugs',
  burned_budget: 'Burned budget',
  business_value: 'Business value',
  class_complexity: 'Complexity / Class',
  class_complexity_distribution: 'Class Distribution / Complexity',
  classes: 'Classes',
  code_smells: 'Code Smells',
  cognitive_complexity: 'Cognitive Complexity',
  comment_lines: 'Comment Lines',
  comment_lines_data: 'comment_lines_data',
  comment_lines_density: 'Comments (%)',
  commented_out_code_lines: 'Commented-Out LOC',
  complexity: 'Complexity',
  complexity_in_classes: 'Complexity in Classes',
  complexity_in_functions: 'Complexity in Functions',
  conditions_by_line: 'Conditions by Line',
  conditions_to_cover: 'Branches to Cover',
  confirmed_issues: 'Confirmed Issues',
  coverage: 'Coverage',
  coverage_line_hits_data: 'Coverage Hits by Line',
  covered_conditions_by_line: 'Covered Conditions by Line',
  critical_violations: 'Critical Issues',
  directories: 'Directories',
  duplicated_blocks: 'Duplicated Blocks',
  duplicated_files: 'Duplicated Files',
  duplicated_lines: 'Duplicated Lines',
  duplicated_lines_density: 'Duplicated Lines (%)',
  duplications_data: 'Duplication Details',
  effort_to_reach_maintainability_rating_a: 'Effort to Reach Maintainability Rating A',
  executable_lines_data: 'executable_lines_data',
  false_positive_issues: 'False Positive Issues',
  file_complexity: 'Complexity / File',
  file_complexity_distribution: 'File Distribution / Complexity',
  files: 'Files',
  function_complexity: 'Complexity / Function',
  function_complexity_distribution: 'Function Distribution / Complexity',
  functions: 'Functions',
  generated_lines: 'Generated Lines',
  generated_ncloc: 'Generated Lines of Code',
  info_violations: 'Info Issues',
  it_branch_coverage: 'IT Condition Coverage',
  it_conditions_by_line: 'IT Conditions by Line',
  it_conditions_to_cover: 'IT Branches to Cover',
  it_coverage: 'IT Coverage',
  it_coverage_line_hits_data: 'IT Coverage Hits by Line',
  it_covered_conditions_by_line: 'IT Covered Conditions by Line',
  it_line_coverage: 'IT Line Coverage',
  it_lines_to_cover: 'IT Lines to Cover',
  it_uncovered_conditions: 'IT Uncovered Conditions',
  it_uncovered_lines: 'IT Uncovered Lines',
  last_commit_date: 'Date of Last Commit',
  line_coverage: 'Line Coverage',
  lines: 'Lines',
  lines_to_cover: 'Lines to Cover',
  major_violations: 'Major Issues',
  minor_violations: 'Minor Issues',
  ncloc: 'Lines of Code',
  ncloc_data: 'ncloc_data',
  ncloc_language_distribution: 'Lines of Code Per Language',
  new_blocker_violations: 'New Blocker Issues',
  new_branch_coverage: 'Condition Coverage on New Code',
  new_bugs: 'New Bugs',
  new_code_smells: 'New Code Smells',
  new_conditions_to_cover: 'Branches to Cover on New Code',
  new_coverage: 'Coverage on New Code',
  new_critical_violations: 'New Critical Issues',
  new_duplicated_blocks: 'Duplicated Blocks on New Code',
  new_duplicated_lines: 'Duplicated Lines on New Code',
  new_duplicated_lines_density: 'Duplicated Lines on New Code (%)',
  new_info_violations: 'New Info Issues',
  new_it_branch_coverage: 'Condition Coverage by IT on New Code',
  new_it_conditions_to_cover: 'Branches to Cover by IT on New Code',
  new_it_coverage: 'Coverage by IT on New Code',
  new_it_line_coverage: 'Line Coverage by IT on New Code',
  new_it_lines_to_cover: 'Lines to Cover by IT on New Code',
  new_line_coverage: 'Line Coverage on New Code',
  new_lines: 'Lines on New Code',
  new_lines_to_cover: 'Lines to Cover on New Code',
  new_maintainability_rating: 'Maintainability Rating on New Code',
  new_major_violations: 'New Major Issues',
  new_minor_violations: 'New Minor Issues',
  new_overall_branch_coverage: 'Overall Condition Coverage on New Code',
  new_overall_conditions_to_cover: 'Overall Branches to Cover on New Code',
  new_overall_coverage: 'Overall Coverage on New Code',
  new_technical_debt: 'Added Technical Debt',
  new_violations: 'New Issues',
  new_vulnerabilities: 'New Vulnerabilities',
  open_issues: 'Open Issues',
  overall_branch_coverage: 'Overall Condition Coverage',
  overall_conditions_by_line: 'Overall Conditions by Line',
  overall_conditions_to_cover: 'Overall Branches to Cover',
  overall_coverage: 'Overall Coverage',
  overall_coverage_line_hits_data: 'Overall Coverage Hits by Line',
  overall_covered_conditions_by_line: 'Overall Covered Conditions by Line',
  overall_line_coverage: 'Overall Line Coverage',
  sqale_rating: 'Maintainability Rating',
  sqale_index: 'Technical Debt',
  violations: 'Issues',
};

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
    return metricTranslations[metric] || metric.split('_').map(word => this.capitalize(word)).join(' ');
  }

  capitalize(word) {
    const [firstLetter, ...letters] = word;

    return [firstLetter.toUpperCase(), ...letters].join('');
  }
}
