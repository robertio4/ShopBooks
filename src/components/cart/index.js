import React from 'react'
import Item from './Item'

// Redux
import { useSelector } from 'react-redux'

// Material-ui
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 630,
  },
})

const Users = () => {
  const classes = useStyles()

  // Obtener el carrito del state
  const { data, loading, error } = useSelector(state => state.cart)

  return (
    <div>
      <Typography paragraph variant="h5" component="h2" align="center">
        Your cart
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {loading ? (
        <Typography paragraph variant="h6" component="h4" align="center">
          Cargando ...
        </Typography>
      ) : data.items.length ? (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.items.map(item => (
                  <Item key={item.id} data={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <Typography paragraph variant="h6" component="h4" align="center">
          No data
        </Typography>
      )}
    </div>
  )
}

export default Users
