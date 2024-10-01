import Link from 'next/link'

const Button = ({ name, path }) => {
  return (
    <Link href={path} passHref legacyBehavior>
      <button type="button" className="custom_button">
        {name}
      </button>
    </Link>
  )
}

export default Button
