import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link'

export default () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Link>
          <a>
            <Card raised>
              <CardContent>Card 1</CardContent>
            </Card>
          </a>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link>
          <a>
            <Card raised>
              <CardContent>Card 2</CardContent>
            </Card>
          </a>
        </Link>
      </Grid>
      <Grid item xs={4}>
        <Link>
          <a>
            <Card raised>
              <CardContent>Card 3</CardContent>
            </Card>
          </a>
        </Link>
      </Grid>
    </Grid>
  )
}
