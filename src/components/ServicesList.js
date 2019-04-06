import React from 'react'
import axios from 'axios'

import Switcher from '../containers/Switcher'

import {
  StyledWrapper,
  StyledPhoneNameWrapper,
  StyledPhoneName,
  StyledSpaceBlock,
  StyledTableWrapper,
  StyledTable,
  StyledTableRow,
  StyledTableData
} from './ServicesList.styled'

class ServicesList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      path: '',
      selectedPhone: '',
      hash: window.location.search,
      previousSearch: window.location.search,
      pricelist: [],
      updateSw: false
    }

    this.getServices = this.getServices.bind(this)
  }

  getServices() {
    const sendRequest = async () => {
      try {
        return await axios.get(
          'http://www.mobifix.tech/servicesprice.php?name=' +
            this.state.selectedPhone.slice(
              this.state.selectedPhone.indexOf(' ') + 1
            )
        )
      } catch (error) {
        console.log(error)
      }
    }

    const getData = () => {
      const response = sendRequest()
        .then(response => {
          this.setState({ pricelist: response.data })
        })
        .catch(error => {
          console.log(error)
        })
    }

    getData()
  }

  getHashValue = value => {
    const hash = window.location.hash
    const index = hash.indexOf(value)

    return hash.substring(index + value.length + 1, hash.length)
  }

  getPhoneName = () => {
    const hash = window.location.search
    const index = hash.indexOf('phone')
    const perc = hash.indexOf('%20')

    return (
      hash.slice(index + 'phone'.length + 1, perc) +
      ' ' +
      hash.slice(perc + '%20'.length, hash.length)
    )
  }

  componentWillMount() {
    this.setState({
      selectedPhone: this.getPhoneName('phone')
    })
  }

  componentDidMount() {
    this.getServices()
  }

  componentWillUpdate() {
    if (window.location.search !== this.state.previousSearch) {
      this.setState({ selectedPhone: this.getPhoneName('phone') })
    }
  }

  componentDidUpdate() {
    if (window.location.search !== this.state.previousSearch) {
      window.setTimeout(() => {
        this.getServices()
      }, 200)
      this.state.previousSearch = window.location.search
    }
  }

  render() {
    return (
      <StyledWrapper>
        <StyledPhoneNameWrapper>
          <StyledPhoneName>{this.state.selectedPhone}</StyledPhoneName>
        </StyledPhoneNameWrapper>
        <StyledSpaceBlock />
        <StyledTableWrapper>
          <StyledTable>
            <tbody>
              {this.state.pricelist.map((service, index) => {
                return (
                  <StyledTableRow key={index}>
                    <StyledTableData>{service[0]}</StyledTableData>
                    <StyledTableData width={'40px'}>
                      {service[1]}
                    </StyledTableData>
                    <StyledTableData width={'60px'}>
                      <Switcher
                        setPassive={this.state.updateSw}
                        swid={index}
                        sname={service[0]}
                        sprice={service[1]}
                      />
                    </StyledTableData>
                  </StyledTableRow>
                )
              })}
            </tbody>
          </StyledTable>
        </StyledTableWrapper>
      </StyledWrapper>
    )
  }
}

export default ServicesList
