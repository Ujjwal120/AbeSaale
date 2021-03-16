import React from 'react'

import EachRow from './EachRow';
import Card from '../../shared/components/UI/Card'

const FeedGroup = (props) => {
    let style = {
        height : "700px",
        fontSize : "35px"
    }

    if(props.items.length === 0) {
        return <div style = {style}>
            <Card style = {{borderRadius : '15px'}}>
                <div>Bruh! your <i>Now What</i> game is weak </div>
            </Card>
        </div>
    }

    let cnt = 0;
    let rows = [];
    let groupof3 = [];
    for(let post of props.items) {
        if(cnt === 3) {
            rows.push(groupof3);
            groupof3 = [];
            groupof3.push(post);
            cnt = 0;
        }
        else {
            groupof3.push(post);
        }
        cnt++;
    }
    rows.push(groupof3);

    return <React.Fragment>
            {
                rows.map( (row, ind) => {
                    return <EachRow 
                        key = {ind}
                        row = {row}
                    />
                })
            }
        </React.Fragment>
}

export default FeedGroup;