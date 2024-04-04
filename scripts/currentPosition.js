(function ($) {
  Drupal.behaviors.currentPositionBehavior = {
      attach: function (context, settings) {
          // Select all checkboxes with the same selector
          const checkboxes = $(".field--name-field-current-position input", context);

          checkboxes.each(function () {
              

              // Get the name attribute of the checkbox
              const name = $(this).attr('name');

              //get the index value from the name attribute
              const match = /\[(\d+)\]/.exec(name);
              if (match && match[1]) {
                  const index = parseInt(match[1]);

                  //console.log('Index:', index);


                  handleCheckbox.call(this, index, false);
                  
              }
          });

          checkboxes.change(function () {
              // Get the name attribute of the checkbox
              const name = $(this).attr('name');

              //get the index value from the name attribute
              const match = /\[(\d+)\]/.exec(name);
              if (match && match[1]) {
                  const index = parseInt(match[1]);

                  //console.log('Index:', index);

                  handleCheckbox.call(this, index, true);
              }
          });
      }
  };

  // Function to handle checkbox apparition/change event
  function handleCheckbox(index, isChanged) {
      // Find the common parent container
      const parentContainer = $(this).closest('#inline-entity-form-field_usr_jobs-form');

      // Select the corresponding select element based on the index value
      const selectForEdit = parentContainer.find('[data-drupal-selector="edit-field-usr-jobs-form-inline-entity-form-entities-' + index + '-form-field-aux-years-range-0-end-value-year"]');
      const selectForNew = parentContainer.find('[data-drupal-selector="edit-field-usr-jobs-form-' + index + '-field-aux-years-range-0-end-value-year"]');
      const selectElement = selectForEdit.add(selectForNew);
      //const selectElement = $('[data-drupal-selector="edit-field-usr-jobs-form-inline-entity-form-entities-' + index + '-form-field-aux-years-range-0-end-value-year"]');

      if ($(this).is(':checked')) {
          //console.log('Checkbox at index ' + index + ' is checked');
          selectElement.addClass('disabled-select');
          selectElement.prop('readonly', true);
          selectElement.prepend('<option value="2050">Rok</option>');
          selectElement.val('2050');
      } else {

          if(isChanged == true) {
              //console.log('Checkbox at index ' + index + ' is unchecked');
              selectElement.removeClass('disabled-select');
              selectElement.prop('readonly', false);
              selectElement.val('');
              selectElement.find('option[value="2050"]').remove();
          } else {
               //console.log('Checkbox at index ' + index + ' is unchecked');
               selectElement.removeClass('disabled-select');
               selectElement.prop('readonly', false);
          }
      }
  }

  
})(jQuery);
