import React from 'react';
import { Link } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const NewQuestionSuccess = () => (
  <div className="text-center" style={{ padding: '30px 20px' }}>
    <Typography type="title" component="p">
      Thanks, your question will be answered by experts
    </Typography>
    <div style={{ padding: '10px' }}>
      <Link to="/">
        <Button raised>
          Back
        </Button>
      </Link>
    </div>
  </div>
);

export default NewQuestionSuccess;
