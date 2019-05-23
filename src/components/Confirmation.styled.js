import styled from 'styled-components';
import posed from 'react-pose';

const ContainerPose = posed.div({
	confirmationHidden: {
		y: window.innerHeight * 0.5,
		transition: {
			ease: 'linear',
			duration: 300
		}
	},
	confirmationVisible: {
		y: 0,
		transition: {
			ease: 'linear',
			duration: 300
		}
	}
});

export const Container = styled(ContainerPose)`
	height: calc(40vh - 2.5em);
	padding: 1.25em;
	width: calc(100vw - 2.5em);
	background: #fff;
	z-index: 15;
	position: absolute;
	bottom: 0;
	border-radius: 20px 20px 0 0;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Field = styled.input`
	width: 100%;
	text-align: center;
	height: 50px;
	border: none;
	border-radius: 10px;
	border: 1px solid #eee;
	background: #fff;
	outline: none;
	margin-bottom: 1em;

	&:focus {
		border-color: #bbb;
	}
`;

export const Submit = styled.button`
	width: 100%;
	height: 50px;
	border: none;
	border-radius: 10px;
	color: #fff;
	background: #0070c8;
	outline: none;
`;
