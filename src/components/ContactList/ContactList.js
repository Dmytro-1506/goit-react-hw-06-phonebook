import './ContactList.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/Store/Contacts/actionCreators';
import { selectContacts } from 'components/Store/Contacts/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const deleteContactHendler = (id) => {
        dispatch(deleteContact(id));
    }

    return <div className='contacts'>
        <ul className="contact-list">
            {contacts.map(item => {
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