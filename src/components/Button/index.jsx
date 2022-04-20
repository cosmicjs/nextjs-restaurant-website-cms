import Link from 'next/link';

const Button = ({name, path}) => {
  return (
    <Link href={path} passHref>
      <a>
        <button type='button' className='custom_button'>{name}</button>
      </a>
    </Link>
  )
}

export default Button;