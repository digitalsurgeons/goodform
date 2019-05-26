import styled from '@emotion/styled'

export const Head = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
  width: '100%'
})

export const AuthButton = styled.a({
  alignItems: 'center',
  display: 'flex',
  border: 'solid 1px #ddd',
  borderRadius: '4px',
  color: '#333',
  justifyContent: 'center',
  padding: '5px 20px',
  textDecoration: 'none'
})

export const Avatar = styled.img({
  borderRadius: '100%',
  marginLeft: 'auto',
  marginRight: 20,
  height: 50,
  width: 50
})
