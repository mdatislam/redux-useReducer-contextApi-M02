
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({dosto}) => {
    const {name,email,id}=dosto
    return (
        <div >
           <div className=' border border-slate-300 rounded-lg'>
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
           <Link to={`/friend/${id}`} className='btn btn-outline btn-sm mb-2'> show detail</Link>
            
           </div>
        </div>
    );
};

export default Friend;