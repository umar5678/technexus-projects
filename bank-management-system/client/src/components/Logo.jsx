import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Bank <span className="text-blue-600">MS</span>
        </span>
      </Link>
    </div>
  );
}

export default Logo