const validator = new JustValidate('#advanced-usage_form');

validator
  .addField('#advanced-usage_password', [
    {
      rule: 'required',
    },
  ])
  .addField('#advanced-usage_repeat-password', [
    {
      rule: 'required',
    },
    {
      validator: (value, fields) => {
        if (
          fields['#advanced-usage_password'] &&
          fields['#advanced-usage_password'].elem
        ) {
          const repeatPasswordValue =
            fields['#advanced-usage_password'].elem.value;

          return value === repeatPasswordValue;
        }

        return true;
      },
      errorMessage: 'Passwords should be the same',
    },
  ])
  .addField('#advanced-usage_message', [
    {
      validator: (value) => {
        return value !== undefined && (value as string).length > 3;
      },
      errorMessage: 'Message should be more than 3 letters.',
    },
  ])
  .addField(
    '#advanced-usage_consent_checkbox',
    [
      {
        rule: 'required',
      },
    ],
    {
      errorsContainer: '#advanced-usage_consent_checkbox-errors-container',
    }
  )
  .addField('#advanced-usage_favorite_animal_select', [
    {
      rule: 'required',
    },
  ])
  .addRequiredGroup(
    '#advanced-usage_communication_checkbox_group',
    'You should select at least one communication channel'
  )
  .addRequiredGroup('#advanced-usage_communication_radio_group')
  .addField('#advanced-usage_input_number', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
  ])
  .addField('#advanced-usage_input_integer_number', [
    {
      rule: 'required',
    },
    {
      rule: 'integer',
    },
  ])
  .addField('#advanced-usage_input_number_between', [
    {
      rule: 'required',
    },
    {
      rule: 'minNumber',
      value: 10,
    },
    {
      rule: 'maxNumber',
      value: 20,
    },
  ]);