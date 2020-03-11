import React from 'react'
import * as moment from 'moment'

// Redux
import { useDispatch } from 'react-redux'
import actions from '../../store/cart/actions'

// Material-ui
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  fab: {
    top: theme.spacing(3),
    right: theme.spacing(2),
    position: 'relative',
    float: 'right',
  },
}))

const Book = ({ data, onClick }) => {
  const classes = useStyles()

  const { id, title, description, photo, author, price, date } = data

  const dispatch = useDispatch()

  const handleClick = (e, item) => {
    e.preventDefault()

    dispatch(actions.addToCart(item))
  }

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={photo}
          title="Image title">
          <Fab
            className={classes.fab}
            color="primary"
            size="medium"
            aria-label="add"
            onClick={e => handleClick(e, data)}>
            <AddIcon />
          </Fab>
        </CardMedia>

        <CardHeader
          className={classes.cardHeader}
          title={title}
          subheader={`${author} - ${moment(date).format('DD/MM/YYYY')}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography>{description}</Typography>
          <br />
          <Typography align="right" variant="h6" component="h2">
            <b>{price} €</b>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Book
