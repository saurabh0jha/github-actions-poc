<Form title="Partner details" isDisabled isSettings>
        <Form.Input.Text
          title="Partner’s name"
          name="partnersName"
          value={partnerDetails?.partnerCompanyName}
        />
        <Form.Input.Text
          title="Partner’s email"
          name="partnersEmail"
          value={partnerDetails?.partnerEmail}
        />
        <Form.Input.Text
          title="Client owner’s name"
          name="clientOwnerName"
          value={partnerDetails?.clientOwnerName}
        />
        <Form.Input.Text
          title="Client owner’s email"
          name="clientOwnerEmail"
          value={partnerDetails?.clientOwnerEmail}
        />
      </Form>