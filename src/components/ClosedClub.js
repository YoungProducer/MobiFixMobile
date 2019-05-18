import React from 'react'
import axios from 'axios'
import PropsTypes from 'prop-types'

import $ from 'jquery'

import { 
    StyledWrapper,
    StyledText,
    StyledForm,
    StyledInputFrame,
    StyledInput,
    StyledPassiveLine,
    StyledActiveLine,
    StyledButton,
    Info,
    InfoBlock
} 
from './ClosedClub.styled'

class ClosedClub extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nameInputActive: false,
            numberInputActive: false,

            nameInputValue: '',
            numberInputValue: '',

            confirmed: false,
            sended: false,
            infoBlock: false
        }

        this._nameInputOnClick = this._nameInputOnClick.bind(this)
        this._numberInputOnClick = this._numberInputOnClick.bind(this)
        this._nameInputOnChange = this._nameInputOnChange.bind(this)
        this._numberInputOnChange = this._numberInputOnChange.bind(this)
        this._handleClickOutside = this._handleClickOutside.bind(this)
        this._buttonOnClick = this._buttonOnClick.bind(this)
    }

    componentDidMount() {
        document.addEventListener("mousedown", this._handleClickOutside);
    }

    componentWillMount() {
        document.removeEventListener("mousedown", this._handleClickOutside);
    }

    _nameInputOnClick() {
        if (!this.state.nameInputValue.length) {
            this.setState({ nameInputActive: !this.state.nameInputActive })
        }
      
        if (this.state.numberInputActive && !this.state.numberInputValue.length) {
            this.setState({ numberInputActive: !this.state.numberInputActive })
        }
    }

    _numberInputOnClick() {
        if (!this.state.numberInputValue.length) {
            this.setState({ numberInputActive: !this.state.numberInputActive });
        }
      
        if (this.state.nameInputActive && !this.state.nameInputValue.length) {
            this.setState({ nameInputActive: !this.state.nameInputActive });
        }
    }

    _nameInputOnChange(event) {
        this.setState({
            nameInputValue: event.target.value
        })
    }

    _numberInputOnChange(event) {
        $(this.numberInput).val($(this.numberInput).val().replace(/\D/g, ''))

        this.setState({
            numberInputValue: event.target.value
        })
    }

    _handleClickOutside(event) {
        if (
            (this.nameInput &&
            !this.nameInput.contains(event.target)) &&
            (this.numberInput && 
            !this.numberInput.contains(event.target)) &&
            !this.state.formSuccess
        ) {
            if (!this.state.nameInputValue.length && this.state.nameInputActive) {
                this.setState({ nameInputActive: !this.state.nameInputActive });
            }

            if (!this.state.numberInputValue.length && this.state.numberInputActive) {
                this.setState({ numberInputActive: !this.state.numberInputActive });
            }
        }
    }

    _buttonOnClick() {
        const { onShowPushUpNotification, onHidePushUpNotification } = this.props

        const sendRequest = async () => {
            try {
                console.log(this.state.nameInputValue, this.state.numberInputValue)

              return await axios.post(
                'http://www.mobifix.tech/closedclub.php?name=' + this.state.nameInputValue + 
                '&phone=' + this.state.numberInputValue
              )
            } catch (error) {
              console.log(error)
            }
          }

        if (this.state.nameInputActive && this.state.numberInputActive) {
            this.setState({
                nameInputActive: !this.state.nameInputActive,
                numberInputActive: !this.state.numberInputActive
            });        
            

            this.setState({
                confirmed: true
            })
            window.setTimeout(() => {
                this.setState({
                    confirmed: false
                })
            }, 400)
    
            const res = sendRequest()
            .then(response => {
                console.log(response)
                onShowPushUpNotification()

                window.setTimeout(() => {
                    onHidePushUpNotification()
                }, 2000)
            })
            .catch(error => {
                console.log(error)
            })

            this.setState({ nameInputValue: "", numberInputValue: "" });
            this.nameInput.value = "";
            this.numberInput.value = "";
        }
    }

    render() {
        const { infoBlock } = this.state
        const pose = infoBlock ? 'active' : 'init'

        return(
            <StyledWrapper>
                <StyledForm>
                    <Info
                        onClick={() => this.setState({infoBlock: !infoBlock})}
                    >i</Info>

                    <InfoBlock pose={pose}>
                        <p>- Розіграш аксесуарів</p>
                        <p>- Знижки на всі види послуг</p>
                                                        
                        <p>- Розіграш безкоштовної поклейки захисного скла </p> 
                        <p>- Безкоштовна прошивка</p> 
                        <p>- Безкоштовна чистка AirPods</p>
                    </InfoBlock>
                
                    <StyledText>
                        Стань учасником закритого клубу
                    </StyledText>

                    <StyledInputFrame>
                        <StyledPassiveLine />
                        <StyledInput 
                            ref={(node) => {this.nameInput = node}}
                            type="text"
                            placeholder="Ім'я"
                            onClick={this._nameInputOnClick}
                            onChange={this._nameInputOnChange}
                        />
                        <StyledActiveLine 
                            pose={this.state.nameInputActive ? 'active' : 'init'}
                        />
                    </StyledInputFrame>

                    <StyledInputFrame>
                        <StyledPassiveLine />
                        <StyledInput
                            ref={(node) => {this.numberInput = node}}
                            type="tel"
                            placeholder="Номер телефону"
                            onClick={this._numberInputOnClick}
                            onChange={this._numberInputOnChange}
                        />
                        <StyledActiveLine 
                            pose={this.state.numberInputActive ? 'active' : 'init'}
                        />
                    </StyledInputFrame>

                    <StyledButton 
                        type="submit" 
                        pose={this.state.confirmed ? 'active' : 'init'}
                        onClick={() => {
                            this._buttonOnClick()
                        }}
                    >Надіслати</StyledButton>
                </StyledForm>
            </StyledWrapper>
        )
    }
}

ClosedClub.propTypes = {
    onTogglePushNotificationState: PropsTypes.func.isRequired,
    onShowPushUpNotification: PropsTypes.func.isRequired,
    onHidePushUpNotification: PropsTypes.func.isRequired,
}

export default ClosedClub