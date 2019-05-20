import styled from 'styled-components';
import posed from 'react-pose';

const DropDownPosed = posed.div({
	init: {
		height: 0,
		transition: {
			duration: 500
		}
	},
	open: {
		height: 'auto',
		transition: {
			duration: 500
		}
	}
});

export const StyledWrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export const StyledContentWrapper = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding-top: 30px;
	margin: auto;
	padding-bottom: 30px;
`;

export const StyledQuestionBlock = styled.div`
	padding: 30px 0;
	border-top: 3px solid #f2f2f2;
	width: 100%;

	&:first-child {
		border: 0;
	}
`;

export const Answer = styled.p`
	margin-top: 10px;
`;

export const Question = styled.p``;

export const Accent = styled.span`
	color: #1e74ff;
`;

export const DropDown = styled(DropDownPosed)`
	width: 100%;
	overflow: hidden;

	p {
		line-height: 1.5;
		margin-bottom: 15px;
		margin-left: 15px;
		&:last-child {
			margin-bottom: 30px;
		}
	}
`;

export const Arrow = styled.img`
	transition: all 0.4s;
	transform: rotateX(${props => (props.opened ? '180deg' : '0deg')});
`;

export const Badge = styled.span`
	color: #1e74ff;
	margin-right: 9px;
`;
