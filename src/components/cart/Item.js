import React from 'react'
import * as moment from 'moment'
import Swal from 'sweetalert2'

// Redux
import { useDispatch } from 'react-redux'
import actions from '../../store/cart/actions'

// Material-ui
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const Item = ({ data }) => {
  const { id, title, category, author, price, date } = data

  const dispatch = useDispatch()

  // Confirmación borrado
  const checkDeleteUser = id => {
    // Alert confimación
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.value) {
        // Lanzar acción
        dispatch(actions.removeFromCart(data))
      }
    })
  }

  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{author}</TableCell>
      <TableCell> {moment(date).format('DD/MM/YYYY')}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell>
        <IconButton
          aria-label="delete item"
          onClick={() => checkDeleteUser(id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Item
