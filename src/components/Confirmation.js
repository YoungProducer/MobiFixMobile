import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Field, Submit } from './Confirmation.styled';
import axios from 'axios';

class Confirmation extends Component {
	state = {
		name: '',
		phone: ''
	};

	_sendForm = () => {
		const { name, phone } = this.state;
		const {
			cart,
			onShowPushUpNotification,
			onHidePushUpNotification
		} = this.props;

		axios
			.post('http://www.mobifix.tech/accessorytelegram.php', {
				name: name,
				phone: phone,
				cart: cart
			})
			.then(response => {
				onShowPushUpNotification('Замовлення оформленно'); // Remove after axios will work
				window.setTimeout(() => {
					onHidePushUpNotification();
				}, 2000);
			});
	};

	_handleField = e => {
		switch (e.target.name) {
			case 'name':
				if (!/[0-9]/.test(e.target.value) || e.target.value == '') {
					this.setState({ name: e.target.value });
				}
				break;
			case 'phone':
				if (
					/[0-9]/.test(e.target.value[e.target.value.length - 1]) ||
					e.target.value == ''
				) {
					this.setState({ phone: e.target.value });
				}
				break;
		}
	};

	render() {
		const { isVisible } = this.props;

		return (
			<Container
				pose={isVisible ? 'confirmationVisible' : 'confirmationHidden'}
			>
				<div>
					<Field
						type='text'
						name='name'
						value={this.state.name}
						placeholder="Прізвище та ім'я"
						onChange={this._handleField}
					/>
					<Field
						type='text'
						name='phone'
						value={this.state.phone}
						maxLength='10'
						placeholder='Номер телефону'
						onChange={this._handleField}
					/>
				</div>
				<Submit onClick={() => this._sendForm()}>Замовити</Submit>
			</Container>
		);
	}
}

Confirmation.propTypes = {
	onShowPushUpNotification: PropTypes.func.isRequired,
	onHidePushUpNotification: PropTypes.func.isRequired
};

export default Confirmation;
