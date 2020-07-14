import React from 'react';
import Example from './example';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import "./index.less";

export default class App extends React.Component {
    render() {
        return (
            <DndProvider backend={Backend}>
                <Example />
            </DndProvider>
        )
    }
}