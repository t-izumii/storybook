import './block.scss';
import { create as createInputText } from '../input-text/input-text';
import { create as createSelect } from '../select/select';
import { create as createCheckbox } from '../checkbox/checkbox';
import { create as createRadio } from '../radio/radio';
import { create as createTextarea } from '../textarea/textarea';

export interface Props {
  field :'input' | 'select' | 'checkbox' | 'radio' | 'textarea';
  label: string;
  subText: string;
  errorText: string;
  active: boolean;
  errorState: boolean;
  flex: boolean;
}

export const create = ({ label = 'label' , field = 'input' , subText = 'subtext' , errorText = 'errorText' , active = true , errorState = false , flex = false }: Props) => {
  const tag = document.createElement('div');

  const labelBox = document.createElement('label');
  const contentBox = document.createElement('div');
  const subTextBox = document.createElement('p');
  const fieldBox = document.createElement('div');
  const errorTextBox = document.createElement('p');

  tag.appendChild(labelBox);
  tag.appendChild(contentBox);
  contentBox.appendChild(subTextBox);
  contentBox.appendChild(fieldBox);
  contentBox.appendChild(errorTextBox);
  labelBox.innerText = label;
  subTextBox.innerText = subText;

  if ( errorState ) {
    errorTextBox.innerText = errorText;
  }



  if ( field === 'input' ) {
    const inputElement = createInputText({
      size: 'medium',
      active: active,
      errorState: errorState,
      label: '',
      placeholder: '入力してください'
    });
    fieldBox.appendChild(inputElement);
  } else if ( field === 'select' ) {
    const selectElement = createSelect({
      size: 'medium',
      active: active,
      errorState: errorState,
    });
    fieldBox.appendChild(selectElement);
  } else if ( field === 'checkbox' ) {
    for ( let i = 0 ; i < 3 ; i++ ) {
      const checkboxElement = createCheckbox({
        active: active,
        label: 'Checkbox'
      });
      fieldBox.appendChild(checkboxElement);
    }

  } else if ( field === 'radio' ) {
    for ( let i = 0 ; i < 3 ; i++ ) {
      const radioElement = createRadio({
        active: active,
        label: 'Radio'
      });
      fieldBox.appendChild(radioElement);
    }
  } else if ( field === 'textarea' ) {
    const textareaElement = createTextarea({
      active: active,
      errorState: errorState,
      label: '',
      placeholder: 'Placeholder'
    });
    fieldBox.appendChild(textareaElement);
  }

  tag.className = ['c-form', flex ? '--flex' : ''].filter(Boolean).join(' ');
  labelBox.className = ['c-form__label'].join(' ');
  contentBox.className = ['c-form__content'].join(' ');
  subTextBox.className = ['c-form__subtext'].join(' ');
  fieldBox.className = ['c-form__field'].join(' ');
  errorTextBox.className = ['c-form__errortext'].join(' ');


  return tag;
};
