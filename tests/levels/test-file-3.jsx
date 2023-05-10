<ProgressSteps
stepsCompleted={-1}
steps={[
  {
    content: (
      <span>
        Click <Bolded>Review Stack in AWS Console</Bolded>
      </span>
    ),
  },
  {
    content: (
      <span>
        Navigate through the AWS Cloudformation{' '}
        <Bolded>Create Stack</Bolded> flow (using the default
        values) until you reach page acknowledging created IAM
        resource
      </span>
    ),
  },
  {
    content: (
      <span>
        Check the box to{' '}
        <Bolded>
          acknowledge that IAM resources may have custom names
        </Bolded>
      </span>
    ),
  },
  {
    content: (
      <span>
        Click <Bolded>Create Stack</Bolded>
      </span>
    ),
  },
  {
    content: (
      <span>
        When the stack is finished creating, go to the{' '}
        <Bolded>Outputs</Bolded> tab to find the role ARN
      </span>
    ),
  },
]}
isNumeric
/>