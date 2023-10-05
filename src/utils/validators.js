import validator from 'validator';

export function signupFromRules(formData) {
    return {
      user_name: validator.isEmpty(formData.user_name),
      first_name: validator.isEmpty(formData.first_name),
      last_name: validator.isEmpty(formData.last_name),
      password: validator.isEmpty(formData.password),
      address: validator.isEmpty(formData.address),
      postal_code: validator.isEmpty(formData.postal_code),
      email: !validator.isEmail(formData.email),
      contact_number: !validator.isNumeric(String(formData.contact_number)),
    };
}

export function loginFromRules(formData) {
  return {
    user_name: validator.isEmpty(formData.user_name),
    password: validator.isEmpty(formData.password),
  };
}

export function addItemRules(formData) {
  return {
    name: validator.isEmpty(formData.name),
    user_id: !validator.isNumeric(String(formData.user_id)),
    category: validator.isEmpty(formData.category),
    description: validator.isEmpty(formData.description),
    interchangeable: validator.isEmpty(formData.interchangeable),
    price: !validator.isNumeric(String(formData.price)),
  };
}

export function editProfileFromRules(formData) {
  return {
    user_name: validator.isEmpty(formData.user_name),
    first_name: validator.isEmpty(formData.first_name),
    last_name: validator.isEmpty(formData.last_name),
    address: validator.isEmpty(formData.address),
    postal_code: validator.isEmpty(formData.postal_code),
    email: !validator.isEmail(formData.email),
    contact_number: !validator.isNumeric(String(formData.contact_number)),
  };
}

export function messageRules(message) {
  return {
    message_error: validator.isEmpty(message.text_message.trim())
  };
}

export function formValidate(rules) {
    let result = true;
    for (const key in rules) {
      result = result & !rules[key];
    }
    return result;
}
