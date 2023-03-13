import './ContactList.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Store/Contacts/actionCreators';
import { selectContacts } from 'components/Store/Contacts/selectors';
import { selectFilter } from 'components/Store/Filter/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    console.log(filter);
    const contactsList = () => {
        if (filter.length > 0) {
            return filter
        }
        return contacts
    }

    const deleteContactHendler = (id) => {
        dispatch(deleteContact(id));
    }

    return <div className='contacts'>
        <ul className="contact-list">
            {contactsList().map(item => {
                return <li key={item.id} className='contact-item'>
                    <span>{item.name}:</span>
                    <span className='number'>{item.number}</span>
                    <button type="button" className='deleteBtn' name={item.name}
                        onClick={() => { deleteContactHendler(item.id) }}
                    >Delete contact</button>
                    </li>
            })}
        </ul>
    </div>
}