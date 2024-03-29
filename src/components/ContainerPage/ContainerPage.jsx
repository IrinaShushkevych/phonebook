//created by Irina Shushkevych
import PropTypes from 'prop-types'
import s from './ContainerPage.module.css'

export default function ContainerPage({ title = '', children }) {
  return (
    <div className={s.container}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </div>
  )
}

ContainerPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
