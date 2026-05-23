import { useState } from 'react';
import { v4 } from 'uuid';
import { ContactForm } from './Components/ContactForm';
import { ContactList } from './Components/ContactList';
import { type contactListType, type formType } from './types';
import { validateFields, checkExistValidate } from './utils';
import './style.css';

const ContactBook = () => {
    const [form, setForm] = useState<formType>({ name: '', email: '', number: '' });
    const [errors, setErrors] = useState<any>({});
    const [contactList, setContactList] = useState<contactListType>([])
    const [isEditId, setIsEditId] = useState('');

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        setForm((prev) => ({ ...prev, [type]: e.target.value }))
        setErrors((prev: any) => ({ ...prev, [type]: '' }))
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            id: v4(),
            ...form
        }
        const _errors = validateFields(payload);
        if (Object.values(_errors).length) {
            setErrors(_errors);
            return;
        }
        const checkExistError = checkExistValidate(form, contactList, isEditId);
        if (checkExistError && Object.keys(checkExistError).length) {
            setErrors(checkExistError);
            return;
        }

        if (isEditId) {
            const _contactList = contactList.map((val: any) => {
                if (val.id === isEditId) {
                    return {
                        id: isEditId,
                        ...form,
                    }
                } else {
                    console.log('else 49');
                    return val;
                }
            })
            setContactList(_contactList);
            setIsEditId('');
        } else {
            setContactList((prev) => ([...prev, payload]));
        }
        setForm({ email: '', name: '', number: '' });
    }

    const handleEdit = (id: any) => {
        setIsEditId(id);
        const editValue: any = contactList.find((val: any) => val.id === id)
        setForm(editValue);
    }

    const handleDelete = (id: any) => {
        const _contactList = [...contactList];
        const result = _contactList.filter((val: any) => val.id !== id);
        setContactList(result);
    }

    return (
        <div className='container'>
            <div className='create-contact'>
                <ContactForm 
                    form={form}
                    errors={errors}
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                />
            </div>
            <div className='list-contact'>
                <ContactList 
                    contactList={contactList}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default ContactBook;