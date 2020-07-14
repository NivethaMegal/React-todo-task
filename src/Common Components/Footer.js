import React from 'react'
import {A} from './Footercss.js'
import {Footerelement} from './Footercss.js'
import {Clearcompleted} from './Footercss'

export default function Footer(props) {
    return (
        <div>
            <Footerelement>
            <span>{props.count} item left</span>
            <div>
            <A>All</A>
            <A>Active</A>
            <A>Completed</A>
            </div>
            <Clearcompleted onClick={props.clearCompleted} count={props.count} listlength={props.list.length}>Clear Completed</Clearcompleted>
            </Footerelement>
        </div>
    )
}
