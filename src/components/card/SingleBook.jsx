import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './SingleBook.css';
import CommentArea from '../CommentArea/CommentArea';

const SingleBook =({title, category, price, btn, img, asin}) => {
  
  const [selected, setSelected] = useState(false)

  const selectedBook = () => {
    setSelected((prevState) => !prevState);
  }

  return (
        <>
        <Card id={asin}
          className={selected ? 'selected' : ''}
          onClick={selectedBook}
        >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {category}
                {price}
                </Card.Text>
                <Button variant="primary">{btn}</Button>
            </Card.Body>
        </Card>
        <CommentArea/>
        </>
  )
}

export default SingleBook;


// export class SingleBook extends Component {

//   constructor(props){
//     super(props)

//     this.state = {
//       selected: false,
//       bookId: null
//     }
//   }

//   selectedBook = () => {
//     this.setState((prevState) =>({
//       selected: !prevState.selected
//     }))    
//   }


//   render() {

//     const { selected } = this.state

//     return (
//         <>
//         <Card id={this.props.asin}
//           className={selected ? 'selected' : ''}
//           onClick={this.selectedBook}
//         >
//             <Card.Img variant="top" src={this.props.img} />
//             <Card.Body>
//                 <Card.Title>{this.props.title}</Card.Title>
//                 <Card.Text>
//                 {this.props.category}
//                 {this.props.price}
//                 </Card.Text>
//                 <Button variant="primary">{this.props.btn}</Button>
//             </Card.Body>
//         </Card>
//         <CommentArea/>
//         </>
//     )
//   }
// }

// export default SingleBook