import React, {Component} from 'react';
import './postPistItem.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText  } from 'reactstrap';
class PostListItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			important: false,
			like: false,
			modal: false,
			editModal: false,
			label: this.props.label
		};
		this.onImportant = this.onImportant.bind(this);
		this.closeAndDelete = this.closeAndDelete.bind(this);
		this.closeAndEdit = this.closeAndEdit.bind(this);
		this.editToggle = this.editToggle.bind(this);
		this.labelChange = this.labelChange.bind(this);
		this.onLike = this.onLike.bind(this);
		this.toggle = this.toggle.bind(this);

	}
	toggle() {
		this.setState({
				modal: !this.state.modal
		});
	}
	editToggle() {
		this.setState({
			editModal: !this.state.editModal
		});
}
closeAndDelete(){
	this.toggle();
	setTimeout(() => {
		this.props.onDelete();
		}, 500);
}
closeAndEdit(e){
	e.preventDefault();
	this.props.onEdit(this.state.label, this.props.id);
}
labelChange(e) {
	this.setState({
		label: e.target.value
	}
	)
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
		const {label} = this.props;
		const {important, like} = this.state;
		
		let day = new Date().getDate();
		let month = new Date().getMonth()+1;
		if (day < 10) day = '0' + day;
		if (month < 10) month = '0' + month;
		const date = `${day}.${month}`;
		let classNames ='app-list-item d-flex justify-content-between';
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
						className="btn-trash btn-sm"
						onClick={this.editToggle}>
					<i className="fa fa-edit"></i>
					</button>
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
					<div className="date">{date}</div>
					<i className="fa fa-heart"></i>
			 </div>
			</div>
			<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
			 <ModalHeader toggle={this.toggle}>Удаление поста</ModalHeader>
			 <ModalBody>
					Вы точно хотите удалить пост?
			</ModalBody>
			<ModalFooter>
					<Button color="primary" onClick={this.closeAndDelete}>Да</Button>{' '}
					<Button color="secondary" onClick={this.toggle}>Отмена</Button>
			</ModalFooter>
	 </Modal>
			<Modal isOpen={this.state.editModal} toggle={this.editToggle} className={this.props.className}>
					<ModalHeader toggle={this.editToggle}>Редактирование поста</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.closeAndEdit}>
        <FormGroup>
          <Label for="exampleText">Отредактируйте пост</Label>
										<Input type="textarea" name="text" id="exampleText" 
										defaultValue={label}
										onChange = {this.labelChange}>
										</Input>
        </FormGroup>
								<Button color="primary" type="submit">Редактировать</Button>{' '}
				  		<Button color="secondary" onClick={this.editToggle}>Отмена</Button>
      </Form>
				</ModalBody>
			</Modal>
  </>
		
		)
	}
}
export default PostListItem;
