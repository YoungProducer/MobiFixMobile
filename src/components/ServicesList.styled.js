import posed from 'react-pose'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  position: relative;
  top: 38px;
  height: 100%;
  width: 100%;
`

export const StyledPhoneNameWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

export const StyledSpaceBlock = styled.div`
  background-color: #f1f0f5;
  width: 100%;
  height: 30px;
`

export const StyledPhoneName = styled.div`
  color: #000;
`

export const StyledTableWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;
`

export const StyledTableRow = styled.tr`
  border-bottom: 2px solid #ddd;
  border-right: none;
  height: 50px;
`

export const StyledTableData = styled.td`
  text-align: ${props => props.align};
  width: ${props => props.width};
  font-size: 80%;
`
