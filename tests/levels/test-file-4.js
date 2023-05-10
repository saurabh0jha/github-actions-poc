import React from 'react';

class Sample extends React.Component {
  checkList1 = [
    {
      label: 'Basic Information',
      caption: 'Renewal date, group number etc',
    },
    {
      label: 'Insurance Plans',
      caption: 'Select Insurance plans you offer',
    },
    {
      label: 'Contribution Scheme',
      caption: 'Enter how you contribute to your employees insurance',
    },
  ];

  checkList2 = [
    {
      label: 'Basic Information',
      caption: 'Renewal date, group number etc',
      stage: InsuranceChecklist.STAGES.COMPLETE,
    },
    {
      label: 'Insurance Plans',
      caption: 'Select Insurance plans you offer',
      stage: InsuranceChecklist.STAGES.INCOMPLETE,
    },
    {
      label: 'Contribution Scheme',
      caption: 'Enter how you contribute to your employees insurance',
    },
  ];

  checkList3 = [
    {
      label: 'Basic Information',
      caption: 'Renewal date, group number etc',
      stage: InsuranceChecklist.STAGES.COMPLETE,
    },
    {
      label: 'Insurance Plans',
      caption: 'Select Insurance plans you offer',
      stage: InsuranceChecklist.STAGES.COMPLETE,
    },
    {
      label: 'Contribution Scheme',
      caption: 'Enter how you contribute to your employees insurance',
      stage: InsuranceChecklist.STAGES.COMPLETE,
    },
  ];

  render() {
    return (
      <div>
        <a
          href="https://github.com/Rippling/rippling-webapp/tree/master/app/modules/Insurance/_components/insuranceChecklist"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to documentation
        </a>

        <div className="marginTop--30">
          <InsuranceChecklist
            label="Medical"
            caption="Anthem, Kaiser Performante"
            list={this.checkList1}
            completed={0}
          />
        </div>

        <div className="marginTop--30">
          <InsuranceChecklist
            label="Medical"
            caption="Anthem, Kaiser Performante"
            list={this.checkList2}
            completed={50}
          />
        </div>

        <div className="marginTop--30">
          <InsuranceChecklist
            label="Medical"
            caption="Anthem, Kaiser Performante"
            list={this.checkList3}
            completed={100}
          />
        </div>
      </div>
    );
  }
}

export default Sample;
