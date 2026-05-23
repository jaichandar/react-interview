export const ContactForm = (props: any) => {
    const { handleOnChange, handleOnSubmit, errors, form } = props;
    return (
        <form onSubmit={handleOnSubmit}>
            <div className='input-wrapper'>
                <label className='label'>Name: </label>
                <input
                    value={form.name}
                    onChange={(e) => handleOnChange(e, 'name')}
                    type='text'
                    className='input-field'
                />
                {'name' in errors && <span className='error'>{errors.name}</span>}
            </div>
            <div className='input-wrapper'>
                <label className='label'>email: </label>
                <input
                    value={form.email}
                    onChange={(e) => handleOnChange(e, 'email')}
                    type='email'
                    className='input-field'
                />
                {'email' in errors && <span className='error'>{errors.email}</span>}
            </div>
            <div className='input-wrapper'>
                <label className='label'>phone: </label>
                <input
                    value={form.number}
                    onChange={(e) => handleOnChange(e, 'number')}
                    type='number'
                    className='input-field'
                />
                {'number' in errors && <span className='error'>{errors.number}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}