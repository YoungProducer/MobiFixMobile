import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Global,
	Container,
	Close,
	Header,
	Title,
	About,
	ImageWrapper,
	Image,
	ImagePickWrapper,
	ImagePicker,
	ColorPickWrapper,
	ColorPicker,
	AddToCart
} from './AccessoryModal.styled';

class Modal extends Component {
	constructor() {
		super();

		this.state = {
			currentImage: 0,
			currentColor: 0
		};
	}

	componentDidMount() {
		this.props.closeAccessoryModal();
	}

	_changeImage = e => {
		const { index } = e.target.dataset;
		this.setState({ currentImage: parseInt(index) });
	};

	_changeColor = e => {
		const { index } = e.target.dataset;
		this.setState({ currentColor: parseInt(index), currentImage: 0 });
	};

	_closeModal = () => {
		const { closeAccessoryModal } = this.props;
		this.setState({ currentImage: 0, currentColor: 0 });
		closeAccessoryModal();
	};

	render() {
		const {
			visible,
			title,
			phone,
			images,
			price,
			onAddProduct,
			onShowPushUpNotification,
			onHidePushUpNotification,
			stock
		} = this.props;

		const { currentColor, currentImage } = this.state;

		return (
			<Container pose={visible ? 'visible' : 'init'}>
				<Global active={visible} />
				<Header>
					<Title>{title}</Title>
					<Close onClick={this._closeModal}>
						<img src='./img/close.svg' width='20px' />
					</Close>
				</Header>
				<About>
					<p>{phone === null ? 'Універсальний' : phone.name}</p>
					<p>${price}</p>
				</About>
				<ImageWrapper>
					<Image>
						<img src={images[currentColor].urls[currentImage]} />
					</Image>
					<ImagePickWrapper>
						{images[currentColor].urls.map((image, index) => (
							<ImagePicker
								key={index}
								data-index={index}
								active={currentImage === index}
								onClick={this._changeImage}
							>
								<img
									src={image}
									data-index={index}
									onClick={this._changeImage}
								/>
							</ImagePicker>
						))}
					</ImagePickWrapper>
				</ImageWrapper>
				<ColorPickWrapper>
					{images.map((item, index) => (
						<ColorPicker
							key={index}
							color={item.color.hex}
							data-index={index}
							onClick={this._changeColor}
						/>
					))}
				</ColorPickWrapper>
				{stock == true ? (
					<AddToCart
						onClick={() => {
							onAddProduct(
								title,
								phone.name,
								images[currentColor].color.hex,
								images[currentColor].color.name,
								price
							),
								onShowPushUpNotification(title + ' добавлено у кошик');
							window.setTimeout(() => {
								onHidePushUpNotification();
							}, 2000);
						}}
					>
						у кошик
					</AddToCart>
				) : (
					<AddToCart>Не в наявності</AddToCart>
				)}
			</Container>
		);
	}
}

Modal.propTypes = {
	onShowPushUpNotification: PropTypes.func.isRequired,
	onHidePushUpNotification: PropTypes.func.isRequired
};

export default Modal;
