import React from 'react'

import Switcher from './Switcher'

import {
    StyledWrapper,
} from './ServicesList.styled'

class ServicesList extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          path: '',
          selectedPhone: '',
          hash: window.location.search,
          previousSearch: window.location.search, 
          pricelist: []
        }
    
        this.getServices = this.getServices.bind(this)
    }

    getServices() {
        const sendRequest = async () => {
            try {
            return await axios.get('http://www.mobifix.tech/servicesprice.php?name=' + 
            this.state.selectedPhone.slice(this.state.selectedPhone.indexOf(" ") + 1))
            } catch(error) {
            console.log(error)
            }
    }

    const getData = () => {
        const response = sendRequest()
            .then((response) => {
            this.setState({pricelist: response.data})
        })
            .catch((error) => {
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
        return(
            <StyledWrapper>
                {this.state.selectedPhone}
                {/* <Switcher swid={1}/> */}

            </StyledWrapper>
        )
    }
}

export default ServicesList