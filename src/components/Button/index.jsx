import Link from 'next/link'

const Button = ({ name, path }) => {
  return (
    <Link href={path} passHref>
      <button
        id={name}
        aria-label={name}
        type="button"
        className="custom_button"
      >
        {name}
      </button>
    </Link>
  )
}

export default Button
