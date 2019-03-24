import React from 'react'
import PropsTypes from 'prop-types'

import { 
    StyledWrapper,
    StyledText,
    StyledForm,
    StyledInputFrame,
    StyledInput,
    StyledPassiveLine,
    StyledActiveLine,
    StyledButton
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
        const { onTogglePushNotificationState } = this.props

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
    
            onTogglePushNotificationState(true)

            window.setTimeout(() => {
                onTogglePushNotificationState(false)
            }, 2000)

            this.setState({ nameInputValue: "", numberInputValue: "" });
            this.nameInput.value = "";
            this.numberInput.value = "";
        }
    }

    render() {
        return(
            <StyledWrapper>
                <StyledForm>
                
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
    onTogglePushNotificationState: PropsTypes.func.isRequired
}

export default ClosedClub