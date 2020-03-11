import React from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()

  // Obtener los libros del state
  const { data } = useSelector(state => state.cart)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link color="inherit" component={RouterLink} to="/">
              E-Commerce
            </Link>
          </Typography>
          {/*          <Link color="inherit" component={RouterLink} to="/cart">
            My cart
          </Link> */}
          <Button
            variant="outlined"
            color={'secondary'}
            component={RouterLink}
            to="/cart"
            startIcon={<ShoppingCartIcon />}>
            Cart {data.items.length || 0}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
