import * as React from 'react';
import { Card, CardContent } from '@mui/material';

export default function ContentText(props) {
  function data() {
    if (props.data.type == 1) {
      const data = props.data.content;
      return (
        <Card style={{ whiteSpace: 'pre-wrap', width: props.data.width, height: props.data.height}}>
          <CardContent>{data}</CardContent>
        </Card>
      );
    } else if(props.data.type == 4) {
        if(props.level == 1){
            const data = props.data.content;
            return (
              <Card style={{ width: props.data.width- 50, whiteSpace: 'pre-wrap'}}>
                <CardContent><a href={data}>{data}</a></CardContent>
              </Card>
            );
        }
        else {
            const data = props.data.explanation;
        return (
          <Card style={{ width: props.data.width- 50, whiteSpace: 'pre-wrap'}}>
            <CardContent>{data}</CardContent>
          </Card>
        );
        }
    }
    else {
      const data = props.data.explanation;
      return (
        <Card style={{ width: props.data.width- 50, whiteSpace: 'pre-wrap' }}>
          <CardContent>{data}</CardContent>
        </Card>
      );
    }
  }

  return data();
}
