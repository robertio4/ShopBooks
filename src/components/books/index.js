import React, { useEffect } from 'react'
import Book from './Book'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../store/books/actions'

// Material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Alert } from '@material-ui/lab'

const Books = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    // Ejecutar el action para obtener los libros
    dispatch(actions.getBooks())
  }, [])

  // Obtener los libros del state
  const { data, loading, error } = useSelector(state => state.books)

  return (
    <div>
      <Typography paragraph variant="h5" component="h2" align="center">
        Books
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {loading ? (
        <Typography paragraph variant="h6" component="h4" align="center">
          Cargando ...
        </Typography>
      ) : data.length ? (
        <Grid container spacing={4}>
          {data.map(book => (
            <Book key={book.id} data={book} />
          ))}
        </Grid>
      ) : (
        <Typography paragraph variant="h6" component="h4" align="center">
          No data
        </Typography>
      )}
    </div>
  )
}

export default Books
