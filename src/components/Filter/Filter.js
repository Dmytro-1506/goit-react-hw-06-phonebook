import { useDispatch } from 'react-redux';
import { filterContacts } from 'components/Store/Filter/actionCreators';
import { selectContacts } from 'components/Store/Contacts/selectors';

export const Filter = () => {
    const dispatch = useDispatch();
    // const contacts = useSelector(selectContacts);

    const filterHandler = (e) => {
        const name = e.target.value
        if (!name) { return };
        console.log(name);
        dispatch(filterContacts(name));
    }

    return <div>
        <p>Find contacts by name</p>
        <input className='find' name="findContacts" onChange={filterHandler}></input></div>
}