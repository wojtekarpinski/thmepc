(function ($) {
    Drupal.behaviors.currentPositionBehavior = {
      attach: function (context, settings) {
        // Select all checkboxes with the same selector
        const checkboxes = $(".field--name-field-current-position input", context);
        
        checkboxes.each(function() {
          // Find the common parent container
          const parentContainer = $(this).closest('#inline-entity-form-field_usr_jobs-form');
          
          // Find the index of the checkbox relative to its siblings within the common parent
          const index = parentContainer.find('.field--name-field-current-position input').index(this);
          
          // Select the corresponding select element
          const selectElement = parentContainer.find('[data-drupal-selector="edit-field-usr-jobs-form-inline-entity-form-entities-' + index + '-form-field-aux-years-range-0-end-value-year"]');
          
          // Check initial state of checkbox
          if ($(this).is(':checked')) {
            
            //console.log('Checkbox at index ' + index + ' is checked');
            
            selectElement.addClass('disabled-select');
            selectElement.prop('readonly', true);
            selectElement.prepend('<option value="2050">Rok</option>');
            selectElement.val('2050');
            
          } else {
            // Checkbox is unchecked.
            //console.log('Checkbox at index ' + index + ' is unchecked');
            // Remove the class from the select element
            selectElement.removeClass('disabled-select');
            
          }
        });
        
        checkboxes.change(function() {
          // Find the common parent container
          const parentContainer = $(this).closest('#inline-entity-form-field_usr_jobs-form');
          
          // Find the index of the checkbox relative to its siblings within the common parent
          const index = parentContainer.find('.field--name-field-current-position input').index(this);
          
          // Select the corresponding select element
          const selectForEdit = parentContainer.find('[data-drupal-selector="edit-field-usr-jobs-form-inline-entity-form-entities-' + index + '-form-field-aux-years-range-0-end-value-year"]');
          const selectForNew = parentContainer.find('[data-drupal-selector="edit-field-usr-jobs-form-' + index + '-field-aux-years-range-0-end-value-year"]');
          const selectElement = selectForEdit.add(selectForNew);
          
          if ($(this).is(':checked')) {
            
            //console.log('Checkbox at index ' + index + ' is checked');
            

            selectElement.addClass('disabled-select');
            selectElement.prop('readonly', true);
            selectElement.prepend('<option value="2050">Rok</option>');
            selectElement.val('2050');
            
          } else {
            // Checkbox is unchecked.
            //console.log('Checkbox at index ' + index + ' is unchecked');
            // Remove the class from the select element
            selectElement.removeClass('disabled-select');
            selectElement.prop('readonly', false);
            selectElement.val('');
            selectElement.find('option[value="2050"]').remove();

            
          }
        });
      }
    };
  })(jQuery);
  