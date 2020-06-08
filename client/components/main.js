import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setItems } from '../redux/reducers/items'

const { Card, Container, Icon, Image } = require('semantic-ui-react')

const Main = () => {
  const items = useSelector((store) => store.items.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setItems())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container className="pt-5">
      <Card.Group itemsPerRow={4}>
        {!items
          ? 'Loading'
          : items.map((item) => (
              <Card key={item.id}>
                <div className="card-image">
                  <Image src={item.image} />
                </div>
                <Card.Content>
                  <Card.Header>{item.title}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="eur" />
                    {item.price}
                  </a>
                </Card.Content>
              </Card>
            ))}
      </Card.Group>
    </Container>
  )
}

Main.propTypes = {}

export default React.memo(Main)
