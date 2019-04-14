import React from 'react'
import axios from 'axios'
import $ from 'jquery'
import PropTypes from 'prop-types'

import Burger from '../containers/Burger'
import DropDownMenu from '../containers/DropDownMenu'
import Header from './Header'
import FeedCard from '../containers/FeedCard'
import FeedModal from '../containers/FeedModal'
import Footer from './Footer'

import {
    StyledWrapper,
    StyledContentWrapper,
    StyledShowMore,
    SrollToTop
} from './Feeds.styled'

// const blocks = [
//     {
//       cards: [
//         {
//           id: 0,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795424612',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 1,
//           header: 'Apple вупистили новий iPhone XS',
//           image:'https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_1800,c_limit/iphonexr.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 2,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://www.macprices.net/blog/wp-content/uploads/2018/09/Apple-iPhone-Xs-back-camera-09122018.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//       ]
//     },
//     {
//       cards: [
//         {
//           id: 3,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://img.cdndtl.co.uk/umbraco2017/24294/iphone-xr-in-article.png?w=600&s=802560deb5086811aee7c3ba5a25bbb0',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 4,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://cdn1.alphr.com/sites/alphr/files/2018/09/iphone-xs.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//       ]
//     },
//     {
//       cards: [
//         {
//           id: 0,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/xr/iphone-xr-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1550795424612',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 1,
//           header: 'Apple вупистили новий iPhone XR',
//           image:'https://media.wired.com/photos/5bcea2642eea7906bba84c67/master/w_1800,c_limit/iphonexr.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 2,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://img.cdndtl.co.uk/umbraco2017/24294/iphone-xr-in-article.png?w=600&s=802560deb5086811aee7c3ba5a25bbb0',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//       ]
//     },
//     {
//       cards: [
//         {
//           id: 3,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://www.macprices.net/blog/wp-content/uploads/2018/09/Apple-iPhone-Xs-back-camera-09122018.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//         {
//           id: 4,
//           header: 'Apple вупистили новий iPhone XR',
//           image: 'https://cdn1.alphr.com/sites/alphr/files/2018/09/iphone-xs.jpg',
//           text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi labore voluptatum et debitis porro. Est debitis cumque impedit cupiditate non, optio ea itaque quos cum! Voluptatibus perspiciatis expedita temporibus, blanditiis laborum ullam optio iusto obcaecati esse deleniti tempore delectus quaerat quod, aliquam laudantium. Modi sit deserunt ad id odio officiis dolorem repudiandae? Aliquid, esse deleniti ab accusamus similique veniam architecto id quibusdam quisquam veritatis, reprehenderit porro ad facere unde eius at earum. Eius accusamus minus ad earum doloremque incidunt corrupti dignissimos eum eligendi recusandae soluta molestias consequatur quis inventore a veniam est non voluptas nemo sequi, porro deleniti consequuntur asperiores obcaecati. Itaque quos odit deserunt sint modi sapiente eaque voluptatem enim officiis mollitia magnam veritatis atque id rerum, laborum reprehenderit impedit suscipit expedita in praesentium repellendus doloribus cum ullam aut? Sequi, quisquam ullam! Mollitia totam odio, facilis laudantium in velit harum omnis nulla ipsam? Quibusdam non harum autem dolores ea minima accusantium voluptatum eius, qui est a culpa repudiandae praesentium officia nulla! Inventore saepe nihil reiciendis laborum itaque possimus a ipsa qui, voluptatum cupiditate doloremque rerum consectetur, repellendus nulla laboriosam veritatis soluta beatae! Fugiat libero dolorum totam ex, esse atque fuga numquam sunt modi, consequatur eos voluptatibus magni, nisi temporibus!',
//           date: '2 april',
//           color: '#fff'
//         },
//       ]
//     },
//   ]

class Feeds extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blocksData: [],
            currentPage: 1,
            lastPage: 0,
            displayShowMore: true,
            scrollArrow: true
        }

        this.getBlocksData = this.getBlocksData.bind(this)
        this.showMoreOnClick = this.showMoreOnClick.bind(this)
    }

    getBlocksData() {
      this.setState({currentPage: this.state.currentPage + 1})
      const sendRequest = async () => {
        try {
          return await axios.get('http://api.mobifix.tech/cards', {
            page: this.state.currentPage
          })
        } catch(error) {
          console.log(error)
        }
      }
  
      const getData = () => {
        const res = sendRequest()
        .then(response => {
          this.setState({
            blocksData: this.state.blocksData.concat(response.data.blocks),
            lastPage: response.data.last_page
          })
        })
        .catch(error => {
          console.log(error)
        })
      }

      getData()
    }
  
    componentDidMount() {
      // need to finish back-end
      this.getBlocksData()
    }
  
    showMoreOnClick() {
      // need to finish back-end

      if (this.state.currentPage !== this.state.lastPage + 1) {
        this.getBlocksData()
      } 
      if (this.state.currentPage === this.state.lastPage + 1) {
        this.setState({
          displayShowMore: false
        })
      }
    }

    scrollToTop() {
      $('html, body').animate({ scrollTop: 0 }, 1000, "swing")
    }

    render() {
        const {
          fmVisible
        } = this.props

        return(
            <>
                <StyledWrapper>
                    <DropDownMenu />
                    <Header />
                    <Burger />
                    <StyledContentWrapper>
                        {this.state.blocksData.map((block, index) => {
                            return block.cards.map((card, cardindex) => (
                                    <FeedCard 
                                        key={cardindex}
                                        src={card.image} 
                                        header={card.header}
                                        text={card.text}
                                        date={card.date}
                                    />
                                ))
                        })}
                      <StyledShowMore
                        pose={this.state.displayShowMore ? 'init' : 'hide'}
                        onClick={this.showMoreOnClick}
                      >Показати більше
                      </StyledShowMore>
                      <SrollToTop
                        pose={fmVisible ? 'hide' : 'init'}
                        onClick={this.scrollToTop}
                      >
                        <img src='../img/arrow-top.svg' height='15px'/>
                      </SrollToTop>
                    </StyledContentWrapper>
                    <FeedModal />
                </StyledWrapper>
                <Footer />
            </>
        )
    }
}

Feeds.propTypes = {
  fmVisible: PropTypes.bool.isRequired
}

export default Feeds