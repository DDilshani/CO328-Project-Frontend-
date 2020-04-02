import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class FormLanguage extends Component {

    continue (e) {
        e.preventDefault();
        this.props.nextStep();
    }

      render() { 
        const { handleChange } = this.props;

        return ( 
            <div className = 'card'>
                <Form onSubmit = {e => this.continue(e)}>
                    <div className = 'header'>
                        <h3>Choose Your Language</h3>
                    </div>
                    <div className="mb-3" className='btn-block-language'>
                        <Button type = 'submit' value='sinhala' variant="success" size="lg" onClick={handleChange('language')}>
                        Sinhala
                        </Button>
                        <Button type = 'submit' value = 'english' variant="success" size="lg" onClick={handleChange('language')}>
                        English
                        </Button>
                    </div>
                </Form>
            </div> 
        );
    }
}
 
export default FormLanguage;