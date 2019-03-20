import React from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

import PushUpNotification from './PushUpNotification'

const StyledWrapper = styled.div`
    background-color: #000;
    width: 100%;
    height: calc(100vh - 38px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const StyledText = styled.h1`
    color: #000;
    font-size: 150%;
    width: 90%;
    text-align: center;
`

const StyledForm = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
`

const InputFrame = posed.div({

})

const StyledInputFrame = styled(InputFrame)`
    position: relative;
    width: 200px;
`

const StyledInput = styled.input`
    height: 25px;
    width: 200px;
    outline: none;
    border: none;
    z-index: 1;
`

const StyledPassiveLine = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #bbb;
    width: 100%;
    height: 1px;
    margin: auto;
`

const ActiveLine = posed.div({
    init: {
        width: '0%',
        height: 0
    },
    active: {
        width: '100%',
        height: 2
    }
})

const StyledActiveLine = styled(ActiveLine)`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: #DF564E;
`

const Button = posed.input({
    init: { 
        backgroundColor: '#DF564E',
        transition: {
            duration: 400,
            type: 'tween'
        }
    },
    active: {
        backgroundColor: '#ff8726',
        transition: {
            duration: 400,
            type: 'tween'
        }
    }
})

const StyledButton = styled(Button)`
    width: 200px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: #DF564E;
    color: #fff;
    outline: none;
`

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
      
        if (this.state.numberInputActive && !this.state.numberInputActive.length) {
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
            this.nameInput &&
            !this.nameInput.contains(event.target) &&
            (this.numberInput && !this.numberInput.contains(event.target)) &&
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
        this.setState({
            confirmed: true
        })
        window.setTimeout(() => {
            this.setState({
                confirmed: false
            })
        }, 400)

        this.setState({
            sended: true
        })
        window.setTimeout(() => {
            this.setState({
                sended: false
            })
        }, 2000)

        if (this.state.nameInputActive && this.state.numberInputActive) {
            this.setState({
                nameInputActive: !this.state.nameInputActive,
                numberInputActive: !this.state.numberInputActive
            });
        
        
            this.setState({ nameInputValue: "", numberInputValue: "" });
            this.nameInput.value = "";
            this.numberInput.value = "";
        }
    }

    render() {
        return(
            <StyledWrapper>
                <PushUpNotification visible={this.state.sended}/>

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
                        value="Надіслати"
                        pose={this.state.confirmed ? 'active' : 'init'}
                        onClick={this._buttonOnClick}
                    />
                </StyledForm>
            </StyledWrapper>
        )
    }
}

export default ClosedClub