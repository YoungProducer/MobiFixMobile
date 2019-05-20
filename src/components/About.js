import React from 'react';

import Header from './Header';
import Burger from '../containers/Burger';
import DropDownMenu from '../containers/DropDownMenu';
import Footer from './Footer';

import {
	StyledWrapper,
	StyledContentWrapper,
	StyledQuestionBlock,
	Question,
	Answer,
	DropDown,
	Badge,
	Arrow,
	Accent
} from './About.styled';
class About extends React.Component {
	state = {
		isOpen: false
	};

	render() {
		const { isOpen } = this.state;
		return (
			<>
				<StyledWrapper>
					<DropDownMenu />
					<Header />
					<Burger />
					<StyledContentWrapper>
						<StyledQuestionBlock
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							}}
							onClick={() => this.setState({ isOpen: !this.state.isOpen })}
						>
							<Question>Чому варто обирати саме наш сервіс?</Question>
							<Arrow src='../img/down-arrow.svg' height='8px' opened={isOpen} />
						</StyledQuestionBlock>
						<DropDown pose={isOpen ? 'open' : 'init'}>
							<p>
								<Badge>–</Badge>Найнижчі ціни з-поміж інших сервісний центрів.
							</p>
							<p>
								<Badge>–</Badge>Ми безкоштовно видаємо iPhone на заміну на час
								ремонту.
							</p>
							<p>
								<Badge>–</Badge>Ми проводимо безкоштовну діагностику поломок
								Вашого iPhone.
							</p>
							<p>
								<Badge>–</Badge>MobiFix почистить Ваші AirPods абсолютно
								безкоштовно.
							</p>
							<p>
								<Badge>–</Badge>
								Ми єдині в Тернополі, хто після ремонту iPhone 7 і вище,
								поновлює спеціальний захист від води і пилу «IP67».
							</p>
							<p>
								<Badge>–</Badge>
								Більше не потрібно проводити повну заміну дисплея після падіння.
								MobiFix виконує реставрацію верхнього скла(переклей). Це
								зекономить Ваші гроші від 3 до 5 разів у порівнянні з заміною
								дисплея.
							</p>
							<p>
								<Badge>–</Badge>
								Ви можете принести свій неробочий iPhone, ми його полагодимо і
								Ви заробите на цьому. Абсолютно безкоштовна допомога в продажі
								iPhone. Оплата послуг ремонту здійснюється після продажу.
							</p>
							<p>
								<Badge>–</Badge>
								Більшість наших ремонтів успішно завершується протягом декількох
								годин. Достатньо випити чашечку кави і Ваш пристрій отримає
								друге життя!
							</p>
							<p>
								<Badge>–</Badge>
								MobiFix використовує тільки оригінальні деталі для ремонту, крім
								випадків, коли клієнт замовляє копію.
							</p>
							<p>
								<Badge>–</Badge>
								Персонал MobiFix завжди радий бачити нових клієнтів. Ми завжди
								привітні, усміхнені та люб'язні.
							</p>
							<p>
								<Badge>–</Badge>
								На всі виконані ремонтні роботи MobiFix надає гарантію — 65
								днів.
							</p>
							<p>
								<Badge>–</Badge>
								Ми знаходимося в центрі. Раді Вас бачити за адресою м.
								Тернопіль, вул. Сагайдачного 1 (вхід з боку поліцейської арки).
								З любов'ю, Ваш правильний вибір - MobiFix!
							</p>
						</DropDown>
						<StyledQuestionBlock>
							<Question>
								Скільки це займе <Accent>часу</Accent>?
							</Question>
							<Answer>Все залежить від послуг які ви обрали.</Answer>
						</StyledQuestionBlock>
						<StyledQuestionBlock>
							<Question>
								Як взнати <Accent>ціни</Accent> на наші послуги?
							</Question>
							<Answer>
								Натисніть <Accent>ремонт</Accent> та виберіть бажаний телефон.
								Після цього ви зможете побачити всі доступні послуги стосовно
								цього телефону та <Accent>ціни</Accent> на них.
							</Answer>
						</StyledQuestionBlock>
						<StyledQuestionBlock>
							<Question>
								Де нас <Accent>знайти</Accent>?
							</Question>
							<Answer>
								Ви можете нас знайти за адресою{' '}
								<Accent>вул. Гетьмана Сагайдачного 1</Accent>. А також
								подивитися наше місце розташування, перейшовши на вкладку{' '}
								<Accent>"Контакти"</Accent>.
							</Answer>
						</StyledQuestionBlock>
						<StyledQuestionBlock>
							<Question>
								Які наші <Accent>особливості</Accent>?
							</Question>
							<Answer>
								При покупці аксесуарів, ми можемо доставити вам їх особисто та
								абсолютно <Accent>безкоштовно</Accent>, у межах Тернополя
							</Answer>
						</StyledQuestionBlock>
					</StyledContentWrapper>
				</StyledWrapper>
				<Footer />
			</>
		);
	}
}

export default About;
