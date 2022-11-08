import profileReducer, { addPost } from "./profileReducer"



it('length of post should to be increment', () => {
    //  1.start data
    let action = addPost('I"m going to be a millionere', 4)
    let state = {
        posts:[
            {id:1, text:'Hello', likesCount:10},
            {id:2, text:'Hello everyone', likesCount:10},
            {id:3, text:'Hello everyone', likesCount:10},
            {id:4, text:'Hello everyone', likesCount:5},
        ]
    }
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(5)})
