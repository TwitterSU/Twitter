import  React, {Component} from 'react'
import {Button, Confirm, Form, TextArea, Header, Image, Modal} from 'semantic-ui-react'
const EditNode = () => (
  <Modal trigger={<button
    className='ui right floated button blue'
    style={{'fontSize': '0.75em'}}
    onClick={this.props.edit}>
    Edit
  </button>}>
    <Modal.Content image>
      <Image wrapped size='small' src={sessionStorage.getItem('url')}/>
      <Modal.Description>
        <Header>Tweet edit</Header>
        <Form>
              <TextArea onChange={this.textChange.bind(this)} defaultValue={this.props.content}>
              </TextArea>
          <Button onClick={this.show}>Confirm</Button>
          <Confirm
            open={this.state.open}
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
        </Form>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)
export default EditNode