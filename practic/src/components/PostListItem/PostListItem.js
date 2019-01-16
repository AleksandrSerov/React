import React, {Component} from 'react';
import './postPistItem.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class PostListItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			important: false,
			like: false,
			modal: false
		};
		this.onImportant = this.onImportant.bind(this);
		this.closeAndDelete = this.closeAndDelete.bind(this);

		this.onLike = this.onLike.bind(this);
		this.toggle = this.toggle.bind(this);

	}
	toggle() {
		this.setState({
				modal: !this.state.modal
		});

}
closeAndDelete(){
	this.toggle();
	setTimeout(() => {
		this.props.onDelete();
		}, 500);
}

	onImportant() {
		this.setState(({important}) => ({
			important: !important
		}))
	}
	onLike() {
		this.setState(({like}) => ({
			like: !like
		}))
	}
	render() {
		const {label, onDelete} = this.props;
		const {important, like} = this.state;
		let classNames ='app-list-item d-flex justify-content-between'
	 if (important) {
		 classNames += ' important'
		}
		if (like) {
		 classNames += ' like'
	 }
		return (
  <>
  	<div className={classNames}>
				<span 
				className="app-list-item-label"
				onClick={this.onLike}>
				{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button 
					type="button" 
					className="btn-star btn-sm"
					onClick={this.onImportant}>
						<i className="fa fa-star"></i>
					</button>
					<button 
						type="button" 
						className="btn-trash btn-sm"
						onClick={this.toggle}>
						<i className="fa fa-trash-o"></i>
					</button>
					<i className="fa fa-heart"></i>
			 </div>
			</div>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
			 <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
			 <ModalBody>
					Вы точно хотите удалить пост?
			</ModalBody>
			<ModalFooter>
					<Button color="primary" onClick={this.closeAndDelete}>Да</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Отмена</Button>
			</ModalFooter>
	 </Modal>
  </>
		
		)
	}
}
export default PostListItem;
