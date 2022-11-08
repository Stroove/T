import React from "react";
import ProfileStatus from "./ProfileStatusFunctional";
import TestRenderer from 'react-test-renderer';
import {updateStatus} from '../../redux/profileReducer';
import * as reactHooks from "react";
import { useEffect, useState } from "react";
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from "@testing-library/user-event";


jest.mock('react-redux')

describe('ProfileStatusFunctional component', () => {
    test('status from props should be in the state', () =>{
        const testRenderer = TestRenderer.create(<ProfileStatus status='go'/>)
        const testInstance = testRenderer.root;
        expect(testInstance.props.status).toBe('go')
    })

    test('should contain div after create', () =>{
        const testRenderer = TestRenderer.create(<ProfileStatus status='go'/>)
        const root = testRenderer.root;
        const div = root.findByType('div')
        expect(div.children[0].children[1]).not.toBeNull()
    })
    test('shouldnt contain input after create', () =>{
        const testRenderer = TestRenderer.create(<ProfileStatus status='go'/>)
        const root = testRenderer.root;
        expect(()=>{let input = root.findByType('input')}).toThrow()
    })
    test('should div contain go text', () =>{
        const testRenderer = TestRenderer.create(<ProfileStatus status='go'/>)
        const testInstance = testRenderer.root;
        const div = testInstance.findByType('div').children[0].children[1]
        expect(div.children[0]).toBe('go')
    })
    test('input shold be display in edit mode', () =>{
        const testRenderer = TestRenderer.create(<ProfileStatus status='go'/>)
        const testInstance = testRenderer.root;
        const div = testInstance.findByType('div');
        div.props.onDoubleClick;
        const input = testInstance.findByType('div').children[0].children[1];
        expect(input.props.children).toBe('go')
    })
    test('callback should be call', () =>{
    })
})

// ReactTestInstance {
//     _fiber: <ref *1> FiberNode {
//       tag: 5,
//       key: null,
//       elementType: 'div',
//       type: 'div',
//       stateNode: {
//         type: 'div',
//         props: [Object],
//         isHidden: false,
//         children: [Array],
//         internalInstanceHandle: [Circular *1],
//         rootContainerInstance: [Object],
//         tag: 'INSTANCE'
//       },
//       return: FiberNode {
//         tag: 0,
//         key: null,
//         elementType: [Function: ProfileStatus],
//         type: [Function: ProfileStatus],
//         stateNode: null,
//         return: [FiberNode],
//         child: [Circular *1],
//         sibling: null,
//         index: 0,
//         ref: null,
//         pendingProps: [Object],
//         memoizedProps: [Object],
//         updateQueue: [Object],
//         memoizedState: [Object],
//         dependencies: null,
//         mode: 0,
//         flags: 8709,
//         nextEffect: [FiberNode],
//         firstEffect: null,
//         lastEffect: null,
//         lanes: 0,
//         childLanes: 0,
//         alternate: null,
//         actualDuration: 0,
//         actualStartTime: -1,
//         selfBaseDuration: 0,
//         treeBaseDuration: 0,
//         _debugID: 30,
//         _debugSource: [Object],
//         _debugOwner: null,
//         _debugNeedsRemount: false,
//         _debugHookTypes: [Array]
//       },
//       child: FiberNode {
//         tag: 5,
//         key: null,
//         elementType: 'div',
//         type: 'div',
//         stateNode: [Object],
//         return: [Circular *1],
//         child: [FiberNode],
//         sibling: null,
//         index: 0,
//         ref: null,
//         pendingProps: [Object],
//         memoizedProps: [Object],
//         updateQueue: null,
//         memoizedState: null,
//         dependencies: null,
//         mode: 0,
//         flags: 0,
//         nextEffect: null,
//         firstEffect: null,
//         lastEffect: null,
//         lanes: 0,
//         childLanes: 0,
//         alternate: null,
//         actualDuration: 0,
//         actualStartTime: -1,
//         selfBaseDuration: 0,
//         treeBaseDuration: 0,
//         _debugID: 32,
//         _debugSource: [Object],
//         _debugOwner: [FiberNode],
//         _debugNeedsRemount: false,
//         _debugHookTypes: null
//       },
//       sibling: null,
//       index: 0,
//       ref: null,
//       pendingProps: { className: 'profile__status', children: [Object] },       
//       memoizedProps: { className: 'profile__status', children: [Object] },      
//       updateQueue: null,
//       memoizedState: null,
//       dependencies: null,
//       mode: 0,
//       flags: 0,
//       nextEffect: null,
//       firstEffect: null,
//       lastEffect: null,
//       lanes: 0,
//       childLanes: 0,
//       alternate: null,
//       actualDuration: 0,
//       actualStartTime: -1,
//       selfBaseDuration: 0,
//       treeBaseDuration: 0,
//       _debugID: 31,
//       _debugSource: {
//         fileName: 'D:\\React.js\\first-project\\first-project-1\\src\\Components\\profile\\ProfileStatusFunctional.jsx',
//         lineNumber: 26,
//         columnNumber: 9
//       },
//       _debugOwner: FiberNode {
//         tag: 0,
//         key: null,
//         elementType: [Function: ProfileStatus],
//         type: [Function: ProfileStatus],
//         stateNode: null,
//         return: [FiberNode],
//         child: [Circular *1],
//         sibling: null,
//         index: 0,
//         ref: null,
//         pendingProps: [Object],
//         memoizedProps: [Object],
//         updateQueue: [Object],
//         memoizedState: [Object],
//         dependencies: null,
//         mode: 0,
//         flags: 8709,
//         nextEffect: [FiberNode],
//         firstEffect: null,
//         lastEffect: null,
//         lanes: 0,
//         childLanes: 0,
//         alternate: null,
//         actualDuration: 0,
//         actualStartTime: -1,
//         selfBaseDuration: 0,
//         treeBaseDuration: 0,
//         _debugID: 30,
//         _debugSource: [Object],
//         _debugOwner: null,
//         _debugNeedsRemount: false,
//         _debugHookTypes: [Array]
//       },
//       _debugNeedsRemount: false,
//       _debugHookTypes: null
//     }
//   }