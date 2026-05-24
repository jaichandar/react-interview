import { memo } from "react";

export const ContactList = memo((props: any) => {
    const { contactList, handleEdit, handleDelete } = props;

    console.log('list rerender');

    return (
        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    contactList && contactList.length ? contactList.map((val: any, i: any) => (
                        <tr key={val.id}>
                            <td>{i + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.number}</td>
                            <td>
                                <button onClick={() => handleEdit(val.id)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(val.id)}>Delete</button>
                            </td>
                        </tr>
                    )) : (<tr>
                        <td>No Contact Found</td>
                    </tr>)
                }
            </tbody>
        </table>
    )
})