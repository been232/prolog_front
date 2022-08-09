import * as React from 'react';
import { Card, CardContent } from '@mui/material';

export default function ContentText(props) {
  function data() {
    if (props.data.type == 1) {
      const data = props.data.content;
      return (
        <Card style={{ whiteSpace: 'pre-wrap', width: props.data.width, height: props.data.height}}>
          <CardContent style={{fontFamily: "SUIT-Regular"}}>{data}</CardContent>
        </Card>
      );
    } else if(props.data.type == 4) {
        if(props.level == 1){
            const data = props.data.content;
            return (
              <Card style={{ width: props.data.width- 50, height: props.data.height/3}}>
                <CardContent style={{height: props.data.height/4}}><a style={{fontFamily: "SUIT-Regular"}} href={data}>링크 클릭</a></CardContent>
              </Card>
            );
        }
        else {
            const data = props.data.explanation;
        return (
          <Card style={{ width: props.data.width- 50, height: props.data.height/3}}>
            <CardContent style={{fontFamily: "SUIT-Regular", height: props.data.height/4}}>{data}</CardContent>
          </Card>
        );
        }
    }
    else {
      const data = props.data.explanation;
      return (
        <Card style={{ width: props.data.width- 50, whiteSpace: 'pre-wrap' }}>
          <CardContent style={{fontFamily: "SUIT-Regular"}}>{data}</CardContent>
        </Card>
      );
    }
  }

  return data();
}
