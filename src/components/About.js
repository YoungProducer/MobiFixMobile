import React from 'react'

import Header from './Header'
import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Footer from './Footer'

import { 
    StyledWrapper,
    StyledContentWrapper,
    StyledQuestionBlock,
    Question,
    Answer,
    Accent
} from './About.styled'
class About extends React.Component {
    render() {
        return(
            <>
                <StyledWrapper>
                    <DropDownMenu />
                    <Header />
                    <Burger />
                    <StyledContentWrapper>
                        <StyledQuestionBlock>
                                <Question>Чому варто обирати саме наш сервіс?</Question>
                                <Answer>
                                    У нас <Accent>низькі</Accent> ціни, швидкий ремонт, а головне з <Accent>любов'ю</Accent>. Стараємось для того, щоб ви залишились щасливі, а ваш телефон, відчував себе як з конвеєра.
                                </Answer>
                            </StyledQuestionBlock>
                        <StyledQuestionBlock>
                            <Question>Скільки це займе <Accent>часу</Accent>?</Question>
                            <Answer>
                                Все залежить від послуг які ви обрали.
                            </Answer>
                        </StyledQuestionBlock>
                        <StyledQuestionBlock>
                            <Question>Як взнати <Accent>ціни</Accent> на наші послуги?</Question>
                            <Answer>
                                Натисніть <Accent>ремонт</Accent> та виберіть бажаний телефон. Після цього ви зможете побачити всі доступні послуги стосовно цього телефону та <Accent>ціни</Accent> на них.
                            </Answer>
                        </StyledQuestionBlock>
                        <StyledQuestionBlock>
                            <Question>Де нас <Accent>знайти</Accent>?</Question>
                            <Answer>
                                Ви можете нас знайти за адресою <Accent>вул. Гетьмана Сагайдачного 1</Accent>. А також подивитися наше місце розташування, перейшовши на вкладку <Accent>"Контакти"</Accent>.
                            </Answer>
                        </StyledQuestionBlock>
                        <StyledQuestionBlock>
                            <Question>Які наші <Accent>особливості</Accent>?</Question>
                            <Answer>
                                При покупці аксесуарів, ми можемо доставити вам їх особисто та абсолютно <Accent>безкоштовно</Accent>, у межах Тернополя
                            </Answer>
                        </StyledQuestionBlock>
                    </StyledContentWrapper>
                </StyledWrapper>
                <Footer />
            </>
        )
    }
}

export default About