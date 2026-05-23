export const validateFields = (form: any) => {
    const errors: any = {};
    for (let key in form) {
        if (key === 'name' && !form[key]) {
            errors[key] = 'Name is Required';
        } else if (key === 'number') {
            if (!form[key]) {
                errors[key] = 'Number is required';
            } else if (form[key].length !== 10) {
                errors[key] = 'Invalid Number';
            }
        } else if (key === 'email' && !form[key]) {
            errors[key] = 'Email is required';
        }
    }
    return errors;
}

export const checkExistValidate = (form: any, contactList: any[], isEdit: string) => {
    if (isEdit) {
        return;
    } else {
        const errors: any = {};
        contactList.forEach((val: any) => {
            if (val.email === form.email) {
                errors['email'] = "Email Already Exist";
            } else if (val.name === form.name) {
                errors['name'] = 'Name Already Exist';
            }
        })
        return errors;
    }
}